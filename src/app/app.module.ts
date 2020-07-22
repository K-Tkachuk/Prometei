import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ModernComponent } from './components/modern/modern.component';
import { ClassicComponent } from './components/classic/classic.component';
import { DoorsComponent } from './components/doors/doors.component';
import { CountryComponent } from './components/country/country.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductService } from './services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesComponent } from './components/articles/articles.component';
import { SocialComponent } from './components/shared/social/social.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CallButtonComponent } from './components/shared/call-button/call-button.component';
import { EmailService } from './services/email.service';
import { EllipsisPipe } from './services/ellipsis.pipe';


@NgModule({
  declarations: [
    EllipsisPipe,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ModernComponent,
    ClassicComponent,
    DoorsComponent,
    CountryComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ProductComponent,
    ProductListComponent,
    ProductInfoComponent,
    SocialComponent,
    ArticlesComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleInfoComponent,
    CallButtonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
    FontAwesomeModule
  ],
  providers: [
    ProductService,
    ArticleService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/translate/', '.json');
}
