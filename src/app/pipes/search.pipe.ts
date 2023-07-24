import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 

  transform(allProduct:any[],searchTerm:string,propsName:string): any[] {
   const result:any[]=[]
   if(!allProduct||searchTerm==''||propsName==''){
     return allProduct
   }
   allProduct.forEach((product:any)=>{
    if(product[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
     result.push(product)
   })

    return result;
  }

}
