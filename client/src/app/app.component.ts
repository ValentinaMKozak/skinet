import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skinet';
  products: IProduct[] | undefined;
  pagination: IPagination | undefined;

  constructor(private http:HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: (response: any): void => { 
        this.products = response.data;
      },
      error: (error: any) => console.log(this)
    });
  }

}