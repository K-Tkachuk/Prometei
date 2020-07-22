import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit, OnDestroy {

  private routeSub: Params;
  public articleId: number;
  public article: Article;
  constructor(
    private route: ActivatedRoute,
    private articleServise: ArticleService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.articleId = params['id'];

      this.articleServise.init().then(() => {
        this.article = this.articleServise.findArticle(this.articleId);
      });
    });
    setTimeout(this.setStyle, 200);
  }

  setStyle() {
    const tube = $(".tube");
    if (tube.length !== 0)
      tube.css({ "max-width": "800px", "margin": "10px" });
    else
      $(".float-right").css({ "max-width": "300px", "margin": "10px" });

    $(".float-left").css({ "max-width": "300px", "margin": "10px" });

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
