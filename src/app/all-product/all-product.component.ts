import { Component, OnInit } from '@angular/core';
import { ApiService } from '../sevices/api.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit{

  //variable
  allProduct:any=[]
  searchKey:string=''
         
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getAllProduct().subscribe((data:any)=>{
      console.log(data.products);
      this.allProduct=data.products;
      
    })
  }
  filter(event:any){
    console.log(event);
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
}
