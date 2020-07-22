import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsList } from '../models/productsList';
import { Product } from '../models/product';
import { ProductType } from '../models/productType';
import { rejects } from 'assert';
import { Article } from '../models/article';

@Injectable()
export class ArticleService {
    private listArticles: Array<Article>;


    constructor(private http: HttpClient) {
        this.init();
    }
    public init(): Promise<boolean> {
        return new Promise((function(resolve, reject) {
            this.http.get('../../assets/articles.json').subscribe(
                (data: any) => {
                    this.listArticles = data;
                    resolve(true);
                }
            );
          }).bind(this));
    }

    getList(): Array<Article> {
        return this.listArticles;
    }

    findArticle(id: number): Article {
        return this.listArticles.find((item) => {
            return item.id == id;
        });
    }
}
