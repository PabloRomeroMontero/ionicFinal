import {Component} from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    palabrasBuenas = ['hola', 'que pasa', 'ei'];
    palabras: string[] = [];
    miBuscador = '';

    constructor() {
        if (this.miBuscador.length === 0) {
            this.palabras = this.palabrasBuenas.slice();
        }
    }

    buscar($event: CustomEvent) {
        this.palabras.splice(0);
        console.log($event.detail.value);
        for (const palabra of this.palabrasBuenas) {
            if (palabra.startsWith(this.miBuscador)) {
                this.palabras.push(palabra);
            }
        }

        if (this.miBuscador.length === 0) {
            this.palabras = this.palabrasBuenas.slice();
        }
    }
}
