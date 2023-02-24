import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product: IProduct | undefined;

  constructor(private shopService: ShopService, 
    private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService){
      this.bcService.set('@productDetails', '');
    }

  ngOnInit(){
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.params['id']).subscribe({
    next : (product: any): void => {
    this.product = product;
    this.bcService.set('@productDetails', product.name);
    },
    error: (error: any) => console.log(error)
    });
    }
}
