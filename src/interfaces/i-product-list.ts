import { IImage } from "./i-image";

export interface IProductPriceRange {
    high: number;
    low: number;
}

export interface IProduct {
    hero: IImage;
    id: string;
    images: IImage[];
    links: {
        www: string;
    };
    name: string;
    priceRange?: {
        regular?: IProductPriceRange;
        selling?: IProductPriceRange;
    };
    price?: {
        regular?: number;
        selling?: number;
    };
    [propName: string]: any;
}

export interface IProductList {
    groups: IProduct[];
    [propName: string]: any;
}
