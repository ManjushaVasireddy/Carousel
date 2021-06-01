import axios from "axios";

import { categoryService } from "./category-service";

jest.mock("axios");

describe("category-service", () => {
    it("can get categories", async () => {
        await categoryService.getAllNewCategory();
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});
