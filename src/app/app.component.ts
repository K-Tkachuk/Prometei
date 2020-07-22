import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private translate: TranslateService,
    private articleService: ArticleService) {
    const lang = localStorage.getItem('lang');

    if (!lang) {
      localStorage.setItem('lang', environment.defaultLocale);
      translate.use(environment.defaultLocale);
    } else { translate.use(lang); }

    productService.init();
    articleService.init();
  }

  ngOnInit() {
  }
}
