import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;

  constructor(private shopService: ShopService,
              private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() { 
    this.shopService.getProduct(+this.activateRoute.snapshot.params['id']).subscribe({
      next : (product: any): void => {
        this.product = product;
      },
      error: (error: any) => console.log(error)
    });
  }
}