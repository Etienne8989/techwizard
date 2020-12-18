import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [SidebarHomeComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SidebarHomeComponent
  ]
})
export class SidebarModule { }
