import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideBarFolderComponent } from './side-bar-folder/side-bar-folder.component';
import { SideBarArticleDisplayComponent } from './side-bar-article-display/side-bar-article-display.component';



@NgModule({
  declarations: [SidebarHomeComponent, SideBarFolderComponent, SideBarArticleDisplayComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SidebarHomeComponent
  ]
})
export class SidebarModule { }
