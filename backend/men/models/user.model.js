import mongoose  from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
})

// static signup method


userSchema.statics.signup = async function (email, password) {
  // Check if email already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create user instance and save
  const user = new this({ email, password: hash });
  await user.save(); // Save to database

  return user;
};

const User = mongoose.model("User", userSchema);
export default User;