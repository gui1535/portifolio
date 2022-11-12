import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CardServicoComponent } from './components/card-servico/card-servico.component';
import { CardProjetoComponent } from './components/card-projeto/card-projeto.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    PreloaderComponent,
    CardServicoComponent,
    CardProjetoComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavComponent,
    PreloaderComponent,
    CardServicoComponent,
    CardProjetoComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
