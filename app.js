const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
let products = [];
let editMode = false;
let editIndex = null;

// Agregar producto
productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

  if (editMode) {
    products[editIndex] = { name, price };
    editMode = false;
    editIndex = null;
    document.getElementById('submitBtn').innerText = 'Agregar Producto';
  } else {
    products.push({ name, price });
  }
  
  productForm.reset();
  renderProducts();
});

// Renderizar productos
function renderProducts() {
  productList.innerHTML = '';
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td class="actions">
        <button class="edit-btn" onclick="editProduct(${index})">Editar</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">Eliminar</button>
      </td>
    `;
    productList.appendChild(row);
  });
}

// Editar producto
function editProduct(index) {
  const product = products[index];
  document.getElementById('name').value = product.name;
  document.getElementById('price').value = product.price;
  editMode = true;
  editIndex = index;
  document.getElementById('submitBtn').innerText = 'Actualizar Producto';
}

// Eliminar producto
function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');
        
        // Verificar credenciales
        if (username === 'Trailer13' && password === 'Trailer123') {
          // Redirigir al CRUD
          window.location.href = 'index.html';
        } else {
          // Mostrar mensaje de error
          errorMessage.textContent = 'Usuario o contraseña incorrectos';
          errorMessage.style.display = 'block';
        }
      });
    }
  });
