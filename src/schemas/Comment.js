import mongoose from 'mongoose';
const { Schema } = mongoose;
const { Types : { ObjectId }} = Schema;

const commentSchema = new Schema({
    post: {
        type: ObjectId,
        required: true,
        ref: 'Post',
    },
    author: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('Comment', commentSchema);