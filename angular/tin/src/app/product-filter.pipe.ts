import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    console.log(searchText);
    if(!searchText) return items;
    
    searchText = searchText.toLowerCase();
    return items.filter(item => item.category.toLowerCase() == searchText);
   } 

}
