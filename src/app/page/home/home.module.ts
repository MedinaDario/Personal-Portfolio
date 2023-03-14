import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './components/card/card.component';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoContentComponent } from './components/info-content/info-content.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


@NgModule({
  declarations: [
    CardComponent,
    ViewHomeComponent,
    NavbarComponent,
    InfoContentComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
