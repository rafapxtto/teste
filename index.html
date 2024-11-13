<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produto Minuano</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Escolha um produto</h1>
    <label for="product-select">Selecione o produto:</label>
    <select id="product-select">
        <!-- As opções serão carregadas via JavaScript -->
    </select>

    <div id="product-list">
        <!-- As informações do produto serão exibidas aqui -->
    </div>

    <script>
        const productSelect = document.getElementById('product-select');
        const productList = document.getElementById('product-list');

        const spreadsheetId = '1Xo2qBdMPK13WQ_6ZH5mV7-FG1wQwJ2JaXoReTRMmuuM/'; // Substitua pela ID da sua planilha do Google Sheets
        const apiKey = '3520b0d0a3725f4834c13815f1f9cc6dd27968c5'; // Substitua pela sua chave de API

        const sheetRange = 'Sheet1!A:D'; // A e D são as colunas da planilha: Nome, Descrição, Especificações, Imagem

        async function fetchProducts() {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetRange}?key=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();

            const products = data.values.slice(1).map(row => ({
                name: row[0],
                description: row[1],
                specifications: row[2],
                image: row[3] // Considerando que a imagem está na 4ª coluna
            }));

            return products;
        }

        function displayProducts(products, filter = "") {
            productList.innerHTML = "";
            const filteredProducts = filter ? products.filter(p => p.name === filter) : products;

            filteredProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" class="product-image" />
                    <p>${product.description}</p>
                    <p><strong>Especificações:</strong> ${product.specifications}</p>
                `;
                productList.appendChild(productDiv);
            });
        }

        function populateSelect(products) {
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = product.name;
                productSelect.appendChild(option);
            });
        }

        async function init() {
            const products = await fetchProducts();
            populateSelect(products);

            // Exibir produtos ao selecionar
            productSelect.addEventListener('change', (event) => {
                displayProducts(products, event.target.value);
            });

            // Exibir todos os produtos inicialmente
            displayProducts(products);
        }

        init();
    </script>
</body>
</html>
