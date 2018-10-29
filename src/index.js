import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
require('dotenv').config();

// MongoDB connect
mongoose.connect(`mongodb://${process.env.MONGODB_ID}:${process.env.MONGODB_PW}@ds052827.mlab.com:52827/reactblog_db`, {useNewUrlParser : true});
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected...');
});

// GraphQL Server connect
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at http://localhost:4000`));