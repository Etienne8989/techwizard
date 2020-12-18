import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  closeSideBar() {
    let classList = (document.querySelector('.sidenav') as HTMLElement).classList;
    if (!classList.contains('transitionOn')){
      classList.replace('transitionOf','transitionOn' );
    }else {
      classList.replace('transitionOn','transitionOf' );
    }
  }
}
