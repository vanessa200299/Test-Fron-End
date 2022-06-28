import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FABComponent } from 'src/app/share/components/fab/fab.component';
import { MaterialAngularModule } from '../material-angular/material-angular/material-angular.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FABComponent],
  imports: [
    CommonModule,
    MaterialAngularModule,
    RouterModule
  ],
  exports:[FABComponent]
})
export class ShareModule { }
