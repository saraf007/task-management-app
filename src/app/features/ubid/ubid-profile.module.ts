import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UbidProfileRoutingModule } from './ubid-profile-routing.module';
import { UbidProfileComponent } from './ubid-profile/ubid-profile.component';

@NgModule({
  declarations: [
    UbidProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UbidProfileRoutingModule
  ]
})
export class UbidProfileModule { }
