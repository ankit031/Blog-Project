import { Injectable } from '@angular/core';

export interface Blog {
  title: string;
  description: string;
  publishedDate: string;
  author: string;
}

@Injectable()
export class SharedBlogService {

  private readonly blogs: Blog[] = [
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },

    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },

    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },

    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },
    { title: 'Ankit', description: '1234567890', publishedDate: '11/04/2020', author: 'Ankit' },

  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }

}
