import mongoose from 'mongoose'; // Use ESM import

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export the model as default
const User = mongoose.model('User', userSchema);
export default User;
