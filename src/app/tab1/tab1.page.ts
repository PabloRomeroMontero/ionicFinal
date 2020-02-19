import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private menu: MenuController, private routes: Router, private authService: FirebaseService) {
        if (this.authService.userDetails()) {
            this.userEmail = this.authService.userDetails().email;
        } else {
            this.routes.navigate(['']);
        }
    }

    userEmail: string;


    logout() {
        this.authService.logoutUser()
            .then(res => {
                console.log(res);
                this.routes.navigate(['']);
            })
            .catch(error => {
                console.log(error);
            });
    }


    ionViewWillEnter() {
        this.menu.enable(true, 'custom');
    }


}
