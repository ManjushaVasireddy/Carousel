import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    @Prop({ required: false, default: "" }) public imageLink: string;
    @Prop({ required: false, default: "" }) public altLink: string;
    @Prop({ required: true, default: "" }) public headerText: string;

    public cardClicked(): void {
        if (this.imageLink) {
            this.$emit("cardClicked");
        }
    }
}
