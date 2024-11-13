const products = [
    {
        name: "Poltrona Madri",
        description: "Mecanismo swivel glider power com 2 motores independentes.",
        specifications: "Possui balanço e giro."
    },
    {
        name: "Poltrona Bergamota",
        description: "Design exclusivo de Samuca.",
        specifications: "Parte da coleção 'Além da Superfície'."
    }
    // Adicione mais produtos aqui
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>Especificações:</strong> ${product.specifications}</p>
    `;
    productList.appendChild(productDiv);
});
