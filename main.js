class ProductManager { 
    constructor(){
        this.products = []
    }

    static id = 0



    addProduct(title, description, price, thumbnail, code, stock) {

        for(let i=0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`El código ${code} ya está en uso`);
                break;
            }
        }

        const newProduct = {title, description, price, thumbnail, code, stock}
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.products.push({...newProduct, id: ProductManager.id});
        } else { 
            console.log("Todos los campos son obligatorios")
        }
    }

    getProduct() {
        return this.products;
    }

    exists(id) {
        return this.products.find((newProducts) => newProducts.id === id)
    }

    getProductById(id) {
        if(!this.exists(id)){
            console.log("Not found")
        } else {
            console.log(this.exists(id))
        }
    }
}

const newProducts = new ProductManager();

// arreglo vacío
console.log(newProducts.getProduct());

newProducts.addProduct('producto prueba', 'Este es un producto prueba', 200, "Sin imagen", 'abc123', 25)
newProducts.addProduct('producto prueba2', 'Este es un producto prueba2', 300, "Sin imagen2", 'abc1234', 24)

// arreglo con producto 
console.log(newProducts.getProduct());

// busqueda por id
// newProducts.getProductById(1)

// busqueda por id not found
// newProducts.getProductById(3)

// agregar producto con un mismo código
// newProducts.addProduct('producto prueba3', 'Este es un producto prueba3', 300, "Sin imagen2", 'abc1234', 25)

// validar que esten todos los campos
// newProducts.addProduct('producto prueba2', 'Este es un producto prueba2', 300, "Sin imagen2", 'abc1234')