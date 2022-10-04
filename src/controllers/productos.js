import ProductoServices from "../services/productos.js";
export default class ProductosController {
  constructor() {
    this.productoServices = new ProductoServices();
  }

  async getAll() {
    const todosProductos = await this.productoServices.getAll();
    return todosProductos;
  }

  async crearProducto(prod) {
    const productoCreado = await this.productoServices.crearProducto(prod);
    return productoCreado;
  }
}
