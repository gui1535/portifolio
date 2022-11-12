import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PreloaderComponent } from './components/preloader/preloader.component';


@NgModule({
  declarations: [
    NavComponent,
    PreloaderComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [NavComponent, PreloaderComponent]
})
export class SharedModule { }
