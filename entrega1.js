

class ProductManager { //Realizar una clase "ProductManager" que gestione un conjunto de productos.
    constructor() {
        this.products = []; // Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
        this.nextId = 1; // ID base
    }

    addProduct(title, description, price, thumbnail, code, stock) { // Método "addProduct" que agregará un producto al arreglo de productos inicial.
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Todos los campos son obligatorios');
            return;
        }

        const codeExists = this.products.some(product => product.code === code); // Validar que no se repita el campo "code"
        if (codeExists) {
            console.error('El código ya está en uso');
            return;
        }

        const product = { //Cada producto que gestione debe contar con las propiedades mencionadas abajo.
            id: this.nextId++, //Al agregar producto, debe crearse un id autoincrementable
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) { // Método "getProductById" el cual debe buscar en el arreglo el producto que coincida con elid.
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error('Not found'); //En caso de no coincidir ningún Id, mostrar en consola un error "Not found".
        }
    }
}



const manager = new ProductManager();
manager.addProduct('Taza Mágica 1', 'Taza mágica donde aparece imagen sublimada al vertir agua caliente', 20, 'thumbnail1.jpg', 'TM001', 100);
manager.addProduct('Taza Plástica 1', 'Taza plástica con imagen sublimada', 10, 'thumbnail2.jpg', 'TP002', 50);

const productos = manager.getProducts();
console.log(productos);

const product = manager.getProductById(1); // Busca el producto con ID 1
console.log(product);
