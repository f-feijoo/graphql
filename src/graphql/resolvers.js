import ProductosController from "../controllers/productos.js";

const productosController = new ProductosController();

export const resolvers = {
  Query: {
    getAllProductos: () => {
      return productosController.getAll();
    },
  },
  Mutation: {
    agregarProducto: async (_, { input }) => {
      return productosController.crearProducto(input);
    },
  },
};
