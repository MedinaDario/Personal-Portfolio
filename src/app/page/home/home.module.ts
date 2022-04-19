import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './components/card/card.component';
import { ViewHomeComponent } from './components/view-home/view-home.component';


@NgModule({
  declarations: [
    CardComponent,
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
