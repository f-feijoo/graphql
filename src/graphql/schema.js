export const typeDefs = `
type Query{
    getAllProductos: [Producto]
}
type Mutation {
    agregarProducto(input:ProductoInput): Producto
}

type Producto {
    id: ID
    name: String,
    price: Int,
    stock: Int
}

input ProductoInput{
    name: String
    price:Int
    stock: Int
}
`;
