import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../sevices/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

    productId:string='';
    product:any=[];


  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.productId=data.id
      this.api.viewProductDetail(this.productId).subscribe((result:any)=>{
        console.log(result);
        this.product=result
      })
      
    })
  }

}
