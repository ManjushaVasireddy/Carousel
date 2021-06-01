import { Vue, Component, Prop } from "vue-property-decorator";

import { IProduct, IProductPriceRange } from "../../interfaces/i-product-list";
import Card from "../../components/card/card.vue";

@Component({
    components: { Card }
})
export default class Product extends Vue {
    @Prop({ required: true, default: null }) public item: IProduct;
    @Prop({ required: true, default: null }) public cardSelectedCall: (product: IProduct) => void;

    public get regularPrice(): number | IProductPriceRange {
        return this.item.priceRange ? <IProductPriceRange>this.item.priceRange?.regular : this.item.price?.regular;
    }

    public get sellingPrice(): number | IProductPriceRange {
        return this.item.priceRange ? <IProductPriceRange>this.item.priceRange?.selling : this.item.price?.selling;
    }

    public get regularPriceText(): string {
        return typeof this.regularPrice == "number"
            ? `$${this.regularPrice}`
            : `$${(this.regularPrice as IProductPriceRange)?.low} - $${
                  (this.regularPrice as IProductPriceRange)?.high
              }`;
    }

    public get sellingPriceText(): string {
        return typeof this.sellingPrice == "number"
            ? `$${this.sellingPrice}`
            : `$${(this.sellingPrice as IProductPriceRange)?.low} - $${
                  (this.sellingPrice as IProductPriceRange)?.high
              }`;
    }

    public get isOnSale(): boolean {
        return typeof this.regularPrice === "number"
            ? this.regularPrice !== this.sellingPrice
            : (this.regularPrice as IProductPriceRange)?.low !== (this.sellingPrice as IProductPriceRange)?.low ||
                  (this.regularPrice as IProductPriceRange)?.high !== (this.sellingPrice as IProductPriceRange)?.high;
    }

    public productClicked(): void {
        this.cardSelectedCall(this.item);
    }
}
