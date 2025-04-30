import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbidProfileComponent } from './ubid-profile/ubid-profile.component';

const routes: Routes = [
  { path: '', component: UbidProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbidProfileRoutingModule { }
