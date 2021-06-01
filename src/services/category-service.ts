import axios from "axios";

export class CategoryService {
    private _baseUrl: string = "http://localhost:9000/catalog";

    public async getAllNewCategory() {
        try {
            let response = await axios.get(`${this._baseUrl}`);
            return response.data;
        } catch (err) {
            return null;
        }
    }
}
export const categoryService = new CategoryService();
