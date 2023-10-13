import ProducPage from "./ProductPage.js";

const $target = document.querySelector('#app');

new ProducPage({
    $target,
    initialState: {
        productId: 1
    }
})