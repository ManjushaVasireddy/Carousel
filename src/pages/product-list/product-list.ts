import { Vue, Component } from "vue-property-decorator";

import { IProduct, IProductList } from "../../interfaces/i-product-list";
import { categoryService, CategoryService } from "../../services/category-service";
import Product from "./product.vue";
import Carousel from "../../components/carousel/carousel.vue";

@Component({
    components: { Product, Carousel }
})
export default class ProductList extends Vue {
    private _categoryService: CategoryService = null;
    public showCarousel: boolean = false;
    public products: IProduct[] = [];
    public activeProduct: IProduct = null;

    public created(): void {
        this._categoryService = categoryService;
    }

    public async mounted(): Promise<void> {
        const response: IProductList = await this._categoryService.getAllNewCategory();
        this.products = response?.groups;
    }

    public cardSelected(product: IProduct): void {
        this.showCarousel = true;
        this.activeProduct = product;
    }
    public closeCarousel(): void {
        this.showCarousel = false;
    }
}
