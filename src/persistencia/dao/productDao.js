import productModel from "../models/Products.js";
export default class ProductosDao {
  async findAllProducts() {
    const productos = await productModel.find();
    return productos;
  }
  async createOneProduct(prod) {
    const product = await new productModel(prod);
    await product.save();
    return product;
  }
}
