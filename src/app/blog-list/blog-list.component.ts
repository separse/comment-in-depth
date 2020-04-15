import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTitleComponent } from '../blog-post-title/blog-post-title.component';
import { BlogDataService } from '../blog-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost [] [];
  currentPage: number;
  @ViewChildren('title') blogPostTitles: QueryList <BlogPostTitleComponent>;
  constructor(private blogDataService: BlogDataService ) { }

  ngOnInit() {

  //   this.blogPosts.push(new BlogPost('Blog Post 1', 'Summary1'))
  //   this.blogPosts.push(new BlogPost('Blog Post 2', 'Summary2'))
  this.currentPage = 0;
  this.blogPosts = this.blogDataService.getData();
  }

  updatePage(newPage) {
    this.currentPage = newPage;
  }
  
  expandAll() {
    this.blogPostTitles.forEach(e => e.fullShowSummary());
    }

  favAll() {
  this.blogPosts[this.currentPage] = 
  this.blogPosts[this.currentPage].map(post => ({
    title: post.title,
    summary: post.summary,
    isFav: true
  }))
}
}
