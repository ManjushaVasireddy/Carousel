import { IProduct } from "../../interfaces/i-product-list";

const Product: IProduct = {
    id: "washed-cotton-percale-lightweight-quilt-shams-b3603",
    name: "Organic Washed Cotton Percale Lightweight Quilt &amp; Shams",
    links: {
        www: "https://www.westelm.com/products/washed-cotton-percale-lightweight-quilt-shams-b3603/"
    },
    priceRange: {
        selling: {
            high: 269,
            low: 34.5
        }
    },
    thumbnail: {
        size: "m",
        meta: "",
        alt: "",
        rel: "thumbnail",
        width: 363,
        href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202122/0113/organic-washed-cotton-percale-lightweight-quilt-shams-1-m.jpg",
        height: 363
    },
    hero: {
        size: "m",
        meta: "",
        alt: "",
        rel: "hero",
        width: 363,
        href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202122/0113/organic-washed-cotton-percale-lightweight-quilt-shams-1-m.jpg",
        height: 363
    },
    images: [
        {
            size: "m",
            meta: "",
            alt: "",
            rel: "althero",
            width: 363,
            href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202122/0113/organic-washed-cotton-percale-lightweight-quilt-shams-m.jpg",
            height: 363
        },
        {
            size: "m",
            meta: "",
            alt: "",
            rel: "althero",
            width: 363,
            href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202120/0097/organic-washed-cotton-percale-lightweight-quilt-shams-11-m.jpg",
            height: 363
        },
        {
            size: "m",
            meta: "",
            alt: "",
            rel: "althero",
            width: 363,
            href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202120/0097/organic-washed-cotton-percale-lightweight-quilt-shams-1-m.jpg",
            height: 363
        }
    ],
    swatches: [],
    messages: [],
    flags: [
        {
            bopisSuppress: false,
            rank: 3,
            id: "newcore"
        },
        {
            bopisSuppress: false,
            rank: 4,
            id: "freeship"
        },
        {
            bopisSuppress: false,
            rank: 7,
            id: "organic"
        }
    ],
    reviews: {
        recommendationCount: 0,
        likelihood: 0,
        reviewCount: 0,
        averageRating: 0,
        id: "washed-cotton-percale-lightweight-quilt-shams-b3603",
        type: "GROUP_REVIEWS"
    }
};

const cardSelectedCall: (product: IProduct) => void = jest.fn();

export default { Product, cardSelectedCall };
