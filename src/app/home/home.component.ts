import { Component, OnInit  } from '@angular/core';
import { Blog, SharedBlogService } from '../shared-blog.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  blogs: Blog[];


  constructor(private blogsService: SharedBlogService) { }

  ngOnInit() {
    this.blogs = this.blogsService.getBlogs();
    console.log(this.blogs);
  }



}
