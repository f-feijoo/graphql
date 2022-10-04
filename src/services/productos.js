import ProductosDao from "../persistencia/dao/productDao.js";
export default class ProductosServices {
  constructor() {
    this.productoDao = new ProductosDao();
  }
  async getAll() {
    return this.productoDao.findAllProducts();
  }

  async crearProducto(prod) {
    return this.productoDao.createOneProduct(prod);
  }
}
