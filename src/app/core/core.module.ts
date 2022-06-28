import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialAngularModule } from 'src/app/material-angular/material-angular/material-angular.module';
import { TopBarComponent } from '@core/components/top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule, MaterialAngularModule],
  exports: [TopBarComponent],
})
export class CoreModule {}
