const products = [
    {
        name: "Poltrona Madri",
        description: "Mecanismo swivel glider power com 2 motores independentes.",
        specifications: "Possui balanço e giro.",
        image: "images/poltrona-madri.jpg" // Caminho da imagem
    },
    {
        name: "Poltrona Bergamota",
        description: "Design exclusivo de Samuca.",
        specifications: "Parte da coleção 'Além da Superfície'.",
        image: "poltrona-bergamota.jpg"
    }
    // Adicione mais produtos com imagens aqui
];

const productList = document.getElementById('product-list');
const productSelect = document.getElementById('product-select');

// Função para exibir produtos na página
function displayProducts(filter = "") {
    productList.innerHTML = ""; // Limpa a lista de produtos exibidos

    products.forEach(product => {
        if (product.name === filter) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" class="product-image" />
                <p>${product.description}</p>
                <p><strong>Especificações:</strong> ${product.specifications}</p>
            `;
            productList.appendChild(productDiv);
        }
    });
}

// Função para preencher a caixa de seleção com os produtos
function populateSelect() {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Evento para mudar a exibição dos produtos quando a seleção muda
productSelect.addEventListener('change', (event) => {
    displayProducts(event.target.value);
});

// Inicialização
populateSelect();
