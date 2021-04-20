import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../core/services/blog.service";

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

  }

  getBlogData() {
    console.log('get blog data')
    this.blogService.getData();
  }
}
