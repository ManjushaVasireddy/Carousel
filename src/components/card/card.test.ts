import "jest";
import { VueConstructor } from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import Card from "./card.vue";
import mock from "./card.mock";

const localVue: VueConstructor<Card> = createLocalVue();

describe("Card.vue", () => {
    const wrapper: any = shallowMount(Card, {
        localVue,
        propsData: { ...mock.cardProps }
    });

    it("displays the card information", () => {
        expect(wrapper.find(".card-header").text()).toBe(mock.cardProps.headerText);
    });

    it("calls card clicked when card clicked", () => {
        const card: any = wrapper.find(".card");
        card.trigger("click");
        expect(wrapper.emitted().cardClicked).toBeTruthy();
    });
});
