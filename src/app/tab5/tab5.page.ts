import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-tab5',
    templateUrl: './tab5.page.html',
    styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit, OnDestroy {
    parametro = '';

    constructor(private route: ActivatedRoute, private menu: MenuController) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.parametro = params.id;
        });
        console.log('he sido iniciado');
        // this.menu.enable(false, 'custom');
    }

    ngOnDestroy(): void {
        this.menu.enable(true, 'custom');
    }

}
