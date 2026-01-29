const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = `

  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    hello: String
    books: [Book!]!
  }
`;

const books = [
  { id: '1', title: '1984', author: 'George Orwell' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(() => {
  console.log('🚀 Server ready at <https://localhost:4000>');
});