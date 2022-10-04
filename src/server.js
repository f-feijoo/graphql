import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import { connectDB } from "./persistencia/db/index.js";

const PORT = process.env.PORT || 8080;

connectDB()

const app = express();

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Escuchando al puerto ${PORT}`));
