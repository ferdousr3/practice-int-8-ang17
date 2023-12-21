import { Component } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeData, IBlog } from './home.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public blogs: IBlog[] = HomeData.blogs;
}
