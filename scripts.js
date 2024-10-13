// Variables globales
const products = [
    { id: 1, name: 'Martillo', price: 10 },
    { id: 2, name: 'Destornillador', price: 5 },
    { id: 3, name: 'Taladro', price: 30 },
];

const clients = [];
const inventory = [];

// Prototipo de Cliente
document.addEventListener('DOMContentLoaded', () => {
    // Cargar productos en el catálogo del cliente
    const catalog = document.getElementById('catalog');
    const productSelect = document.getElementById('product');
    
    if (catalog) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerText = `${product.name} - $${product.price}`;
            catalog.appendChild(productDiv);

            const option = document.createElement('option');
            option.value = product.id;
            option.innerText = product.name;
            productSelect.appendChild(option);
        });
    }

    // Manejar el envío del formulario de pedidos
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedProduct = products.find(p => p.id == productSelect.value);
            const quantity = document.getElementById('quantity').value;
            alert(`Pedido realizado: ${selectedProduct.name}, Cantidad: ${quantity}`);
        });
    }

    // Manejar el seguimiento de pedidos
    const trackForm = document.getElementById('trackForm');
    if (trackForm) {
        trackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const orderId = document.getElementById('orderId').value;
            alert(`Rastreando pedido con ID: ${orderId}`);
        });
    }

    // Manejar el formulario de clientes
    const clientForm = document.getElementById('clientForm');
    if (clientForm) {
        clientForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('clientName').value;
            const email = document.getElementById('clientEmail').value;
            clients.push({ name, email });
            document.getElementById('clientForm').reset();
            updateClientList();
        });
    }

    // Actualizar lista de clientes
    function updateClientList() {
        const list = document.getElementById('clientList');
        if (list) {
            list.innerHTML = '';
            clients.forEach(client => {
                const li = document.createElement('li');
                li.innerText = `${client.name} - ${client.email}`;
                list.appendChild(li);
            });
        }
    }

    // Manejar el formulario de inventario
    const inventoryForm = document.getElementById('inventoryForm');
    if (inventoryForm) {
        inventoryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const productName = document.getElementById('productName').value;
            const stock = document.getElementById('stock').value;
            inventory.push({ productName, stock });
            document.getElementById('inventoryForm').reset();
            updateInventoryList();
        });
    }

    // Actualizar lista de inventario
    function updateInventoryList() {
        const list = document.getElementById('inventoryList');
        if (list) {
            list.innerHTML = '';
            inventory.forEach(item => {
                const li = document.createElement('li');
                li.innerText = `${item.productName} - Cantidad: ${item.stock}`;
                list.appendChild(li);
            });
        }
    }

    // Manejar optimización de rutas
    const routeForm = document.getElementById('routeForm');
    if (routeForm) {
        routeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const address = document.getElementById('deliveryAddress').value;
            document.getElementById('routeResult').innerText = `Ruta optimizada para: ${address}`;
        });
    }

    // Manejar generación de informes financieros
    const financialButton = document.getElementById('financialReport');
    if (financialButton) {
        financialButton.addEventListener('click', function() {
            document.getElementById('financialResult').innerText = 'Informe financiero generado con éxito.';
        });
    }
});
