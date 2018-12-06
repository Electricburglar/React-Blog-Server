import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { User, Post, Comment } from './schemas/index';

const resolvers = {
    Query: {
        user: async (_, {id, provider}) => {
            return await User.findOne({id, provider});
        },
        posts: async () => {
            return await Post.find().sort({'createdAt': 1});
        }
    },
    Mutation: {
        login: async (_, { id, name, provider }) => {
            const user = await User.findOne({id, provider});
            if(!user) {
                const date = new Date();
                const new_user = new User({
                    id,
                    name,
                    provider,
                    createdAt: date.getTime()+(3600000*9) // KST,
                });
                return new_user.save();
            }
            return user;
        }
    }
}

export default resolvers;