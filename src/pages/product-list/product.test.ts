import "jest";
import { VueConstructor } from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import Product from "./product.vue";
import mock from "./product.mock";

const localVue: VueConstructor<Product> = createLocalVue();

describe("Product.vue", () => {
    const wrapper: any = shallowMount(Product, {
        localVue,
        propsData: { item: mock.Product, cardSelectedCall: mock.cardSelectedCall }
    });

    it("shows the product", () => {
        expect(wrapper.find(".product .price").text().toBeDefined);
    });

    it("matches snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
