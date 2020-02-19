import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private routes: Router,
        private authService: FirebaseService,
        private formBuilder: FormBuilder,
        private fb: Facebook,
        private fireAuth: AngularFireAuth
    ) {
    }

    // tslint:disable-next-line:variable-name
    validations_form: FormGroup;
    errorMessage = '';


    // tslint:disable-next-line:variable-name
    validation_messages = {
        email: [
            {type: 'required', message: 'Email is required.'},
            {type: 'pattern', message: 'Please enter a valid email.'}
        ],
        password: [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password must be at least 5 characters long.'}
        ]
    };

    ngOnInit() {

        this.validations_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),
        });
    }

  async loginFacebook() {

      this.fb.login(['public_profile', 'user_friends', 'email'])
          .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
          .catch(e => console.log('Error logging into Facebook', e));


      this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    // this.fb.login(['email'])
    //     .then((response: FacebookLoginResponse) => {
    //       this.onLoginSuccess(response);
    //       console.log(response.authResponse.accessToken);
    //     }).catch((error) => {
    //   console.log(error);
    //   alert('error:' + error);
    // });
  }
  onLoginSuccess(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
        .then((response) => {
          this.routes.navigate(['']);
        });
  }

    loginUser(value) {
        this.authService.loginUser(value)
            .then(res => {
                console.log(res);
                this.errorMessage = '';
                this.routes.navigate(['']);
            }, err => {
                this.errorMessage = err.message;
            });
    }

    goToRegisterPage() {
        this.routes.navigate(['/register']);
    }


}
