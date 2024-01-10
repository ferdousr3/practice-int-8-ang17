import { Component } from '@angular/core';
import { UserSkeletonComponent } from '../../../../shared/component/skeleton/user-skeleton/user-skeleton.component';
import { SpinnerComponent } from '../../../../shared/component/spinner/spinner.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FeatureComponent } from './feature/feature.component';
import { HeroComponent } from './hero/hero.component';
import { HomeData, IBlog } from './home.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogsComponent,
    FeatureComponent,
    HeroComponent,
    SpinnerComponent,
    UserSkeletonComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public blogs: IBlog[] = HomeData.blogs;
}
