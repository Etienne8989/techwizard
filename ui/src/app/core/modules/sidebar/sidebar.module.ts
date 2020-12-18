import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';



@NgModule({
  declarations: [SidebarHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarHomeComponent
  ]
})
export class SidebarModule { }
