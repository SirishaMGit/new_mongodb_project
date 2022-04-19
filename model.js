import mongoose from 'mongoose';

let postsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },

  breed: {
    type: String
  }
});

export default mongoose.model("posts", postsSchema);