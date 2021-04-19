import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.css']
})
export class SidebarHomeComponent implements OnInit {

  artickleMock = [ // change to input
    { title: 'title1', text: 'text1', relatedStack: 'stack1' },
    { title: 'title2', text: 'text2', relatedStack: 'stack2' },
    { title: 'title3', text: 'text3', relatedStack: 'stack3' },
    { title: 'title4', text: 'text4', relatedStack: 'stack4' }
  ];

  opened: boolean= false;

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
