// Task 1

let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800, category: "Electronics"}
];

function getProductsByCategory(products_array, category_name) { 
    return products_array.filter(product => product.category === category_name);
}

console.log(getProductsByCategory(products, "Electronics"));





