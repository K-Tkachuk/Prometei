import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ClassicComponent } from './components/classic/classic.component';
import { ModernComponent } from './components/modern/modern.component';
import { CountryComponent } from './components/country/country.component';
import { DoorsComponent } from './components/doors/doors.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleInfoComponent } from './components/article-info/article-info.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'thanks',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'article',
    component: ArticlesComponent
  },
  {
    path: 'article/:id',
    component: ArticleInfoComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'products/classic',
    component: ClassicComponent
  },
  {
    path: 'products/modern',
    component: ModernComponent
  },
  {
    path: 'products/country',
    component: CountryComponent
  },
  {
    path: 'products/doors',
    component: DoorsComponent
  },
  {
    path: 'product/:type/:id',
    component: ProductInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
