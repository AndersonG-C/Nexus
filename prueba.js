document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const registerLink = document.getElementById('register');
    
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert("");
    });
    
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert("");
    });
    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("");
    });
});

// script.js

document.querySelectorAll('.producto').forEach(function(producto) {
    producto.addEventListener('click', function() {
        alert('Más información sobre ' + this.querySelector('h3').textContent);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('salesForm');
    const salesTable = document.getElementById('salesTable').getElementsByTagName('tbody')[0];
    const addProductBtn = document.getElementById('addProductBtn');

    addProductBtn.addEventListener('click', () => {
        const product = salesForm.product.value;
        const price = salesForm.price.value;
        const quantity = salesForm.quantity.value;

        if (product && price && quantity) {
            const newRow = salesTable.insertRow();

            const productCell = newRow.insertCell(0);
            const priceCell = newRow.insertCell(1);
            const quantityCell = newRow.insertCell(2);
            const actionsCell = newRow.insertCell(3);

            productCell.innerText = product;
            priceCell.innerText = price;
            quantityCell.innerText = quantity;

            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'edit-btn');
            editBtn.innerText = 'Editar';
            editBtn.addEventListener('click', () => editProduct(newRow));

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'delete-btn');
            deleteBtn.innerText = 'Eliminar';
            deleteBtn.addEventListener('click', () => deleteProduct(newRow));

            actionsCell.appendChild(editBtn);
            actionsCell.appendChild(deleteBtn);

            salesForm.reset();
        }
    });

    function editProduct(row) {
        const cells = row.getElementsByTagName('td');
        const product = prompt('Editar producto:', cells[0].innerText);
        const price = prompt('Editar precio:', cells[1].innerText);
        const quantity = prompt('Editar cantidad:', cells[2].innerText);

        if (product && price && quantity) {
            cells[0].innerText = product;
            cells[1].innerText = price;
            cells[2].innerText = quantity;
        }
    }

    function deleteProduct(row) {
        row.remove();
    }
});
