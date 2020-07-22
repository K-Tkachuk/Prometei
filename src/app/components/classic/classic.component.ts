import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductType } from '../../models/productType';
import { Product } from '../../models/product';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public productsList: Array<Product> = [];

  ngOnInit(): void {
    this.productService.init().then(() => {
      this.productsList = this.productService.getList(ProductType.classic);
    });
  }
}
