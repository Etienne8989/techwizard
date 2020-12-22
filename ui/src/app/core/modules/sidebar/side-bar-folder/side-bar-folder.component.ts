import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-folder',
  templateUrl: './side-bar-folder.component.html',
  styleUrls: ['./side-bar-folder.component.css']
})
export class SideBarFolderComponent implements OnInit {

isShowArticle = false;
  artickleMock = [ // change to input
    {title: 'title1', text: 'text1'},
    {title: 'title2', text: 'text2'},
    {title: 'title3', text: 'text3'},
    {title: 'title4', text: 'text4'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showArticles(){
    this.isShowArticle = !this.isShowArticle;
  }

}
