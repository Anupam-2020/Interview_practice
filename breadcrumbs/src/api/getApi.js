export const fetchApi = async(url) => {
    const json = await fetch(url);
    const products = await json.json();
    return products.products;
}

export const individualProduct = async(url) => {
    const json = await fetch(url);
    const productDetails = await json.json();
    return productDetails;
}