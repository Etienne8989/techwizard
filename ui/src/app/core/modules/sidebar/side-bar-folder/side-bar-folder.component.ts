import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-folder',
  templateUrl: './side-bar-folder.component.html',
  styleUrls: ['./side-bar-folder.component.css']
})
export class SideBarFolderComponent implements OnInit {

  @Input() folderName: string;
  isShowArticle = false;

  constructor() { }

  ngOnInit(): void {
  }

  showArticles() {
    this.isShowArticle = !this.isShowArticle;
  }

}
