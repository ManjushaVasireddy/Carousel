import { mount } from "@vue/test-utils";

import CarouselClass from "./carousel.vue";
import mock from "./carousel.mock";

describe("Carousel.vue", () => {
    const wrapper: any = mount(CarouselClass, {
        propsData: { ...mock.carouselProps }
    });

    it("displays the card information", () => {
        const img: any = wrapper.findAll(".carousel-image");
        expect(img.length).toBe(1);
    });

    it("closes when X is clicked", () => {
        const closeBtn: any = wrapper.find(".close");
        closeBtn.trigger("click");
        expect(wrapper.emitted().closeCarousel).toBeTruthy();
    });
});
