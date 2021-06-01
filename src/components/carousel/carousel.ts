import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {
    @Prop({ required: true, default: [] }) images: string[];

    public activeIndex: number = 0;
    public maxIndicators: number = 10;
    public currentIndicatorRow = 1;

    public get noOfIndicatorsToShow(): number {
        if (this.currentIndicatorRow * this.maxIndicators > this.images.length) {
            if (this.activeIndex % this.maxIndicators == 0) {
                return this.images.length - this.activeIndex;
            } else {
                return this.images.length % this.maxIndicators;
            }
        } else {
            return this.maxIndicators;
        }
    }

    public next(): void {
        if ((this.activeIndex + 1) % this.maxIndicators == 0 && this.activeIndex != 0) {
            this.currentIndicatorRow++;
        }
        this.activeIndex += 1;
    }

    public previous(): void {
        this.activeIndex -= 1;
        if ((this.activeIndex + 1) % this.maxIndicators == 0 && this.activeIndex != 0) {
            this.currentIndicatorRow--;
        }
    }

    public closeCarousel(): void {
        this.$emit("closeCarousel");
    }
}
