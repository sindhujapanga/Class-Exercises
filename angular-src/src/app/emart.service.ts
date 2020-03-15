import { Injectable } from '@angular/core';
import { Category } from './emart/Category';
import { SubCategory } from './emart/Subcategory';
import { Item } from './emart/Item';
import { Bill } from './emart/Bill';





@Injectable({
  providedIn: 'root'
})
export class EmartService {


  categories: Category[];
  subCategories: SubCategory[];
  allItems: Item[];
  cartItems: Item[];
  allBills : Bill[];

  constructor() {
    this.categories = [{
                              id: 501,
                              name: 'Electronics',
                              brief: 'Varieties of electronics like TV,Washing Machine'
                            },
                            {
                              id: 502,
                              name: 'Mobiles',
                              brief: 'Varieties of SmartPhones'
                            },
                            {
                              id: 503,
                              name: 'Clothes',
                              brief: 'Varieties of SmartPhones'
                            }];
    this.subCategories = [{
                                id: 101,
                                name: 'LED',
                                categoryId: 501,
                                brief: 'Led 50 inches',
                                gstPercent: 5

                          },
                          {
                                id: 102,
                                name: 'Headphones',
                                categoryId: 501,
                                brief: 'Sony',
                                gstPercent: 5

                          },
                          {
                                id: 103,
                                name: 'iphonexs',
                                categoryId: 502,
                                brief: 'iphone',
                                gstPercent: 5

                          },
                          {
                                id: 104,
                                name: 'Samsumg M30s',
                                categoryId: 502,
                                brief: 'samsung',
                                gstPercent: 5
        
                         },
                         {
                                id: 105,
                                name: 'Kurti',
                                categoryId: 503,
                                brief: 'tops',
                                gstPercent: 5
      
                        },
                        {
                                id: 106,
                                name: 'jeans',
                                categoryId: 503,
                                brief: 'Denim',
                                gstPercent: 5
      
                       }];
    this.allItems=[{
                        id: 201,
                        name: 'LED',
                        categoryId: 501,
                        subCategoryId: 101 ,
                        price: 50000,
                        description: 'LG smart Tv 50 inches',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjCka8NYzAft4wQ31XGgWIIHOt7PBlyTk45H3EBaoHmXbItJcg' 
                  },
                  {
                        id: 202,
                        name: 'Headphones ',
                        categoryId: 501,
                        subCategoryId: 102 ,
                        price: 5000,
                        description: 'Mauno wieless head phones',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://images-na.ssl-images-amazon.com/images/I/51rRwx6wJgL._SL1000_.jpg' 
                },
                {
                        id: 203,
                        name: 'iphonexs',
                        categoryId: 502,
                        subCategoryId: 103 ,
                        price: 89900,
                        description: 'Apple iphone xs silver',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzkJq0YupQFe9QgntmORJWtaGxmQ3hW-0p2c7sJkLA7qox30WO' 
                },
                {
                        id: 204,
                        name: 'Samsung M30s',
                        categoryId: 502,
                        subCategoryId: 104 ,
                        price: 14999,
                        description: 'samgsung galaxy M30s',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXHbARa9ipJgTOY06ufUysennHusNKWPCeY9hqHrsnfJQUKCXe' 
                },
                {
                        id: 205,
                        name: 'Kurti',
                        categoryId: 501,
                        subCategoryId: 105 ,
                        price: 5000,
                        description: 'Rock western wear kurti',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrpeFHJrTcIjIR0FWPTIQPargWRvksxw6Y3qm-aIFDYjUafDy1' 
                },
                {
                        id: 206,
                        name: 'jeans',
                        categoryId: 501,
                        subCategoryId: 106 ,
                        price: 50000,
                        description: 'waist design streachable',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvZO8AtlhhiHXTf-Yvm-yuZWzFHMbYn4vZC12S4mrerY15Ym_g' 
              }];
    this.cartItems = [];
  }
  getAllItems():Item[]{
    return [].concat(this.allItems);
  }
  getCategories():Category[]{
    return [].concat(this.categories);
  }
  getSubCategories():SubCategory[]{
    return [].concat(this.subCategories);
  }
  getItem(itemId: string):Item{
    let item: Item;
    let size = this.allItems.length;
    for(let i=0;i<size;i++){
        if(this.allItems[i].id == +itemId){
          //item = this.allItems[i];
         item = { 
                  id: this.allItems[i].id,
                  name: this.allItems[i].name,
                  categoryId: this.allItems[i].categoryId,
                  subCategoryId: this.allItems[i].subCategoryId,
                  price:this.allItems[i].price,
                  description: this.allItems[i].description,
                  stock: this.allItems[i].stock,
                  remarks: this.allItems[i].remarks,
                  img: this.allItems[i].img 
         };
          break;       
       
      }
    }
  return item;
}
addToCart(itemId: number){
  let item:Item = this.getItem(itemId+'')
  this.cartItems.push(item);
}
getAllCart(){
    return [].concat(this.cartItems);
}
deleteCartItem(itemId: number){
  let size = this.cartItems.length;
  for(let i=0;i<size;i++){
    if(this.cartItems[i].id == itemId){
      this.cartItems.splice(i,1);
    }
  }
}
addBill(buyerId: string,todayDate: string){
  let billSize = this.allBills.length;
  let bill:Bill = {
                      id: billSize,
                      buyerId: +buyerId,
                      type: 'Debit',
                      date: todayDate,
                      remarks: '',
                      Item: this.cartItems
                  };
}
}