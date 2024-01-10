import { Component } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { FeatureComponent } from './feature/feature.component';
import { HeroComponent } from './hero/hero.component';
import { HomeData, IBlog } from './home.data';
import { defer } from 'rxjs';
import { SpinnerComponent } from '../../../../shared/component/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogsComponent, FeatureComponent, HeroComponent,SpinnerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public blogs: IBlog[] = HomeData.blogs;
}
