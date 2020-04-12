import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog, SharedBlogService } from '../shared-blog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  blogForm: FormGroup;
  submitted = false;
  blogs: Blog[];
  constructor(private formBuilder: FormBuilder, private blogsService: SharedBlogService) { }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', [Validators.required]]
    });
    this.blogs = this.blogsService.getBlogs();
    console.log(this.blogs);
  }
    get f() { return this.blogForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.blogForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.blogForm.value));
        const formData = this.blogForm.value;
        let currentDate = new Date();
        console.log(currentDate);
        formData.publishedDate = currentDate;

        console.log(formData);
        this.blogs.push(formData);

        console.log(this.blogs, this.blogForm.value);
    
       
    }

}
