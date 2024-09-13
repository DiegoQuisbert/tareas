const fs = require('fs/promises');
const crypto = require('crypto');
class Productos {
    path = '';
    
    constructor(path='data/products.json'){
        this.path = path;
    }

    // {id: 'dsdsds32d', name: 'mouse',  price: '222222' }
    async addProduct( product ){
        const { name, price } = product;
        const id = crypto.randomUUID();
        // Leo el JSON local
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        //const id = array.length + 1;
        array.push({
            id: id,
            name: name,
            price: price
        })
        const dataStr= JSON.stringify( array, null, 2);
        // Guardo el JSON
        await fs.writeFile( this.path, dataStr, null, 2 );

    }
    async getProducts(){
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        return array;
    }
    async getProductById( id ){
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        return array.find( product => product.id == id);
    }
    async deleteProductById( id ){

    }
}


module.exports = { Productos }