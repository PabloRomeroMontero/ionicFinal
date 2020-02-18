import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {Tab4Page} from './tab4.page';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {RouterModule} from '@angular/router';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab4Page}])
    ],
    declarations: [Tab4Page]
})
export class Tab4PageModule {
}
