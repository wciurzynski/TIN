export interface IProduct {
    _id: string,
    name: string,
    image_url: string,
    category: string,
    description: string,
    price: number,
    size: Array<string>,
    meterials: Array<string>,
}