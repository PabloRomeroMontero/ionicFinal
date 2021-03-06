import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Tab5Page } from './tab5.page';
import {RouterModule} from '@angular/router';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: Tab5Page}])
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
