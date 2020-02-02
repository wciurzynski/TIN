import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IOpenWeather } from '../open-weather';
import { Router, ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from '../open-weather.service';
import { CategoryService } from '../category.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product_list = [];
  public category_list = [];
  public current_weather: IOpenWeather;
  public selected_category = null;
  latitude: number;
  longitude: number;
  results: any[] = [];
  queryField: FormControl = new FormControl();

  public model: any;

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1
        ? []
        : this.product_list.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _openWeatherService: OpenWeatherService
  ) {
    this._categoryService.setLoginPage(false);
  }

  ngOnInit() {
    this._productService.getProductList()
      .subscribe(data => this.product_list = data['data']);

    this._categoryService.getCategoryList()
      .subscribe(data => {
        this.category_list = data['data'];
        console.log(this.category_list);
      });

    this.setCurrentLocation();
    this.queryField.valueChanges
      .subscribe(queryField => this.onChange(queryField))
  }

  /**
   * Used to format the result data from the lookup into the
   * display and list values. Maps `{name: "band", id:"id" }` into a string
  */
  resultFormatBandListValue(value: any) {
    return value.name;
  }
  /**
    * Initially binds the string value and then after selecting
    * an item by checking either for string or key/value object.
  */
  inputFormatBandListValue(value: any) {
    if (value.name)
      return value.name
    return value;
  }

  selectedItem(item) {
    console.log(item);
    console.log(item.item);
    console.log(item.item._id);
    if (item && item.item && item.item._id) {
      console.log('/product-details?productID=' + item.item._id);
      this.router.navigate(['/product-details'], { queryParams: { productID: item.item._id } });
    }
  }

  onChange(queryField) {
    if (!queryField) {
      this.results = [];
    } else {
      this._categoryService.search(queryField)
        .subscribe(response => this.results = response['data']);
    }
  }

  addProduct(product_id) {
    console.log("addProduct " + product_id);
  }

  onChangeCategory(event: any) {
    console.log("onChangeCategory ");
    if (event.target.value === 'none') {
      this.selected_category = null;
    } else {
      this.selected_category = event.target.value;
    }
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this._openWeatherService.getCurrentWeather(this.latitude, this.longitude)
          .subscribe(data => {
            let _current_weather = {
              temp: Math.round(data['main']['temp'] - 273.15),
              city: data['name'],
              pressure: data['main']['pressure'],
              weather_icon: data['weather'][0]['icon'],
              wind_speed_kh: (data['wind']['speed'] / 1000 * 3600).toFixed(2),
              weather_icon_source: null,
            };

            switch (_current_weather.weather_icon) {
              case "01d":
              case "02d":
              case "01n":
              case "02n":
                _current_weather.weather_icon_source = "assets/img/sun.svg";
                break
              case "03d":
              case "04d":
              case "03n":
              case "04n":
                _current_weather.weather_icon_source = "assets/img/cloud.svg";
                break
              case "09d":
              case "10d":
              case "09n":
              case "10n":
                _current_weather.weather_icon_source = "assets/img/water.svg";
                break
              case "11d":
              case "11n":
                _current_weather.weather_icon_source = "assets/img/hailstorm.svg";
                break
              case "13d":
              case "13n":
                _current_weather.weather_icon_source = "assets/img/snow.svg";
                break
              case "50d":
              case "50n":
                _current_weather.weather_icon_source = "assets/img/wave.svg";
                break
            }
            this.current_weather = _current_weather;
          });
      });
    }
  }

}
