import { createLocalVue, shallowMount, mount } from "@vue/test-utils";

import { categoryService } from "./../../services/category-service";
import ProductList from "./product-list.vue";

const localVue: any = createLocalVue();

jest.mock("./../../services/category-service");
describe("product-list.vue", () => {
    const wrapper: any = mount(ProductList, {
        localVue
    });
    it("gets product list", () => {
        expect(categoryService.getAllNewCategory).toHaveBeenCalled();
    });
});
