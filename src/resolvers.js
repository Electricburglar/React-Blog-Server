import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import User from './schemas/User';

const resolvers = {
    Query: {
      hello: (_, args) => `Hello ${args.name || 'World'}!`,
    },
    Mutation: {
        SignUp: (_, { id, name, provider }) => {
            const user = new User({
                id,
                name,
                provider
            });
            
            return user.save();
        }
    }
}

export default resolvers;