const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  let { name, email, password } = req.body;

  try {
    // Trim inputs
    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.loginUser = async (req, res) => {
  let { email, password } = req.body;
  console.log("Login request", { email, password });

  try {
    // Trim input to prevent whitespace errors
    email = email.trim();
    password = password.trim();

    if (typeof email !== "string" || typeof password !== "string") {
      return res
        .status(400)
        .json({ message: "Invalid email or password format" });
    }

    const user = await User.findOne({ email });
    console.log("User:", user);

    if (!user) return res.status(404).json({ message: "User not found" });

    console.log("Entered password:", password);
    console.log("Hashed password from DB:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password matched:", isMatch);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
