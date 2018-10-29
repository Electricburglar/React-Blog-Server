import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    author: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    count: {
        type: Number,
        default: 0
    },
    countComment: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('Post', postSchema);