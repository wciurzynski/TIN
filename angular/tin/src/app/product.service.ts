import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductList() {
    return [
      {
        "_id": 0,
        "name": "T-shirt Biały",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaas/4674-0007-0011-tee.jpg",
        "category": "T-shirt",
        "description": "T-shirt z kolekcji PLNY x STADIUM™ w kolorze białym z surowo wykończonymi rękawami, kołnierzem i dołem. Uniwersalny element wielu stylizacji.<br> Mocno limitowany drop Stadium X Lecia to kolekcja przygotowana pod szyldem PLNY Merchtedes. Projekty inspirowane retrospekcyjnym albumem Tede & Sir Micha.",
        "price": 89,
        "size": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "80% bawełna",
          "20% poliester"
        ]
      },
      {
        "_id": 1,
        "name": "T-shirt Classic Czarny",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaa3/4616-0034-jetblack-tee.jpg",
        "category": "T-shirt",
        "description": "Czarny, klasyczny t-shirt uszyty z najwyższej jakości dzianiny. Uniwersalny kolor i krój sprawią, że bez trudu dopasujesz go do większości codziennych stylizacji.<br> Mocno limitowany drop Stadium X Lecia to kolekcja przygotowana pod szyldem PLNY Merchtedes. Projekty inspirowane retrospekcyjnym albumem Tede & Sir Micha.",
        "price": 119,
        "size": [
          "M",
          "L"
        ],
        "meterials": [
          "85% bawełna",
          "15% poliester"
        ]
      },
      {
        "_id": 2,
        "name": "T-shirt Classic Biały",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaa1/4626-0016-titawhite-tee.jpg",
        "category": "T-shirt",
        "description": "Biały, klasyczny t-shirt uszyty z najwyższej jakości dzianiny. Uniwersalny kolor i krój sprawią, że bez trudu dopasujesz go do większości codziennych stylizacji.<br> Mocno limitowany drop Stadium X Lecia to kolekcja przygotowana pod szyldem PLNY Merchtedes. Projekty inspirowane retrospekcyjnym albumem Tede & Sir Micha.",
        "price": 119,
        "size": [
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "85% bawełna",
          "15% poliester"
        ]
      },
      {
        "_id": 3,
        "name": "Bluza bez kaptura",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaa9/4578-0038-jet-long.jpg",
        "category": "Longsleeve",
        "description": "Longsleeve z kolekcji Logomania™ z legendarnym logo PLNY® na wstawce.",
        "price": 159,
        "size": [
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "100% bawełna"
        ]
      },
      {
        "_id": 4,
        "name": "Bluza z kapturem granatowa",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaao/4656-0009-hoodie2.jpg",
        "category": "Bluza z kapturem",
        "description": "Bluza w kolorze granatowym uszyta z bawełny najwyższej jakości. Nadruk z przodu. Kieszeń kangurka.<br> Mocno limitowany drop Stadium X Lecia to kolekcja przygotowana pod szyldem PLNY Merchtedes. Projekty inspirowane retrospekcyjnym albumem Tede & Sir Micha.",
        "price": 249,
        "size": [
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "80% bawełna",
          "20% poliester"
        ]
      },
      {
        "_id": 5,
        "name": "Bluza z kapturem pomarańczowa",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaaq/4666-0011-hoodie1.jpg",
        "category": "Bluza z kapturem",
        "description": "Bluza w kolorze pomarańczowym uszyta z bawełny najwyższej jakości. Z przodu nadruk. Kieszeń kangurka.<br> Mocno limitowany drop Stadium X Lecia to kolekcja przygotowana pod szyldem PLNY Merchtedes. Projekty inspirowane retrospekcyjnym albumem Tede & Sir Micha.",
        "price": 249,
        "size": [
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "80% bawełna",
          "20% poliester"
        ]
      },
      {
        "_id": 6,
        "name": "Spodnie czarne długie",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaa7/4648-0030-black-pants.jpg",
        "category": "Spodnie",
        "description": "Czarne spodnie typu jogger. Luźny fason i zwężana, zakończona ściągaczem nogawka. Szeroka guma w pasie zaopatrzona dodatkowo w sznurek umożliwiający regulacje. Nie krępująca ruchów dzianina zapewniają wysoki komfort, co sprawia, że joggery od kilku sezonów nie tracą na popularności.",
        "price": 239,
        "size": [
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "90% bawełna",
          "10% poliester"
        ]
      },
      {
        "_id": 7,
        "name": "Spodnie niebieskie długie",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaa5/4632-0026-blue-pants.jpg",
        "category": "Spodnie",
        "description": "Niebieskie spodnie typu jogger. Luźny fason i zwężana, zakończona ściągaczem nogawka. Szeroka guma w pasie zaopatrzona dodatkowo w sznurek umożliwiający regulacje. Nie krępująca ruchów dzianina zapewniają wysoki komfort, co sprawia, że joggery od kilku sezonów nie tracą na popularności.",
        "price": 239,
        "size": [
          "M",
          "L",
          "XL"
        ],
        "meterials": [
          "90% bawełna",
          "10% poliester"
        ]
      },
      {
        "_id": 8,
        "name": "Szalik czarny",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaac/4594-0010-black-scarf.jpg",
        "category": "Akcesoria",
        "description": "Długi, ciepły szal w logotypy PLNY®.",
        "price": 99,
        "size": [],
        "meterials": [
          "100% akryl"
        ]
      },
      {
        "_id": 9,
        "name": "Szalik niebieski",
        "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaaa/4568-0006-blue-scarf.jpg",
        "category": "Akcesoria",
        "description": "Długi, ciepły szal w logotypy PLNY®.",
        "price": 99,
        "size": [],
        "meterials": [
          "100% akryl"
        ]
      }
    ];
  }
}
