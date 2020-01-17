export interface IOpenWeather {
    temp: number,
    city: string,
    pressure: number,
    wind_speed_kh: string,
    weather_icon: string,
    weather_icon_source?: string,
}