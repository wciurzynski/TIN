import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IOpenWeather } from '../open-weather';
import { OpenWeatherService } from '../open-weather.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product_list = [];
  public category_list = [];
  public current_weather: IOpenWeather;
  latitude: number;
  longitude: number;

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _openWeatherService: OpenWeatherService) { }

  ngOnInit() {
    this._productService.getProductList()
      .subscribe(data => this.product_list = data['data']);

    this._categoryService.getCategoryList()
      .subscribe(data => this.category_list = data['data']);

    this.setCurrentLocation();
  }

  addProduct(product_id) {
    console.log("addProduct " + product_id);
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log("set latitude " + this.latitude);
        console.log("set longitude " + this.longitude);
        this._openWeatherService.getCurrentWeather(this.latitude, this.longitude)
          .subscribe(data => {
            console.log(data);
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
            console.log(this.current_weather);
          });
      });
    }
  }

}
