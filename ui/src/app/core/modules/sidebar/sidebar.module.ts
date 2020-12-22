import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideBarFolderComponent } from './sidebar-home/side-bar-folder/side-bar-folder.component';
import { SideBarArticleComponent } from './sidebar-home/side-bar-article/side-bar-article.component';



@NgModule({
  declarations: [SidebarHomeComponent, SideBarFolderComponent, SideBarArticleComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SidebarHomeComponent
  ]
})
export class SidebarModule { }
