import { Component } from '@angular/core';
import { UserSkeletonComponent } from '../../../../shared/components/user-skeleton/user-skeleton.component';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FeatureComponent } from './feature/feature.component';
import { HeroComponent } from './hero/hero.component';
import { HomeData, IBlog } from './home.data';
import { HereSkeletonComponent } from './hero/here-skeleton.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogsComponent,
    FeatureComponent,
    HeroComponent,
    SpinnerComponent,
    UserSkeletonComponent,
    HereSkeletonComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public blogs: IBlog[] = HomeData.blogs;
}
