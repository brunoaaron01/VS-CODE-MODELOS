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
const clientList = document.getElementById('clientList');
const clients = [];

// Verificamos si el formulario existe
if (clientForm) {
    clientForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtenemos los valores de los campos del formulario
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const gmail = document.getElementById('gmail').value;
        const telefono = document.getElementById('telefono').value;
        const dni = document.getElementById('dni').value;
        const direccion = document.getElementById('direccion').value;

        // Guardamos los datos del cliente en el array
        clients.push({
            nombres,
            apellidos,
            gmail,
            telefono,
            dni,
            direccion
        });

        // Limpiamos el formulario
        clientForm.reset();

        // Actualizamos la lista de clientes
        updateClientList();
    });
}

// Función para mostrar los clientes registrados en la lista
function updateClientList() {
    clientList.innerHTML = ''; // Limpiamos la lista anterior

    clients.forEach((client, index) => {
        const li = document.createElement('li');
        li.textContent = `${client.firstName} ${client.lastName} - ${client.email} - Tel: ${client.phone}`;
        
        // Agregamos un botón para eliminar el cliente
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            clients.splice(index, 1); // Eliminamos el cliente del array
            updateClientList(); // Actualizamos la lista
        };

        li.appendChild(deleteButton);
        clientList.appendChild(li);
    });
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
