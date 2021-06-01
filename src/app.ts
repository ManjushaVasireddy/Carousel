import "./app.scss";

import Vue from "vue";
import ProductList from "./pages/product-list/product-list.vue";

export default new Vue({
    render: (hyperScript) => hyperScript(ProductList)
}).$mount("#app");
