import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const authHeader = req.header("Authorization");
  console.log("Auth header:", authHeader);

  const token = authHeader?.split(" ")[1];
  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    if (!decoded?.id) {
      console.log("No ID in token payload");
      return res.status(401).json({ message: "Token is missing user ID" });
    }

    req.user = decoded.id;
    next();
  } catch (err) {
    console.error("JWT verify error:", err.message);
    return res.status(401).json({ message: "Token is not valid" });
  }
}
