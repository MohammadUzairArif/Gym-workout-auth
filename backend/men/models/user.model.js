import mongoose  from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

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
  // Validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

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

// static login method
userSchema.statics.login = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  // Check if email exists
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  // Check password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);
export default User;