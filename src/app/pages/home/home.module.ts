import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FeatureHeaderComponent } from '../feature-header/feature-header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FeatureHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
