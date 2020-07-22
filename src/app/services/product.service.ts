import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsList } from '../models/productsList';
import { Product } from '../models/product';
import { ProductType } from '../models/productType';
import { rejects } from 'assert';

@Injectable()
export class ProductService {
    private listProducts: ProductsList;


    constructor(private http: HttpClient) {
        this.init();
    }
    public init(): Promise<boolean> {
        return new Promise((function (resolve, reject) {
            this.http.get('../../assets/products.json').subscribe(
                (data: any) => {
                    this.listProducts = data;
                    resolve(true);
                }
            );
        }).bind(this));
    }

    getList(type: ProductType): Array<Product> {
        switch (type) {
            case ProductType.classic: {
                return this.listProducts.classic;
            }
            case ProductType.modern: {
                return this.listProducts.modern;
            }
            case ProductType.country: {
                return this.listProducts.country;
            }
            case ProductType.doors: {
                return this.listProducts.doors;
            }
        }
    }

    findProduct(type: ProductType, id: number): Product {
        switch (type) {
            case ProductType.classic: {
                return this.listProducts.classic.find((item) => {
                    return item.id == id;
                });
            }
            case ProductType.modern: {
                return this.listProducts.modern.find((item) => {
                    return item.id == id;
                });
            }
            case ProductType.country: {
                return this.listProducts.country.find((item) => {
                    return item.id == id;
                });
            }
            case ProductType.doors: {
                return this.listProducts.doors.find((item) => {
                    return item.id == id;
                });
            }
        }
    }
    sendMessage(url, data) {
        debugger;
        this.http.post(url, data)
            .subscribe(result => {
                debugger;
                var res = result;
            });
    }
}
