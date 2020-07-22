import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductType } from '../../models/productType';
import { NgbCarousel, NgbSlideEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng7BootstrapBreadcrumbService } from 'ng7-bootstrap-breadcrumb';
import { TranslateService } from '@ngx-translate/core';
import { EmailService } from 'src/app/services/email.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  private routeSub: Params;
  product: Product;
  phoneHolder: string = '';
  public form = new FormGroup({
    phone: new FormControl('', [Validators.minLength(10), Validators.required])
  });

  public productId: number;

  constructor(
    private route: ActivatedRoute,
    private productServise: ProductService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private emailService: EmailService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.productId = params['id'];
      const type: number = +ProductType[params['type']];

      this.productServise.init().then(() => {
        this.product = this.productServise.findProduct(type as ProductType, this.productId);
      });
    });
  }

  open(content) {
    this.translate.get("OTHER.PHONE").subscribe((res) => {
      this.phoneHolder = res;
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.emailService.sendEmail("Перезвони мне:  " + this.form.get('phone').value)
        .subscribe(() => {
          this.form.reset();
        });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
