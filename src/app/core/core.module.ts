import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const  declarations = [
  NavBarComponent
]

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...declarations
  ]
})
export class CoreModule { }
