import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Missing email or password" });
  }

  if (email === "sddms@gmail.com" && password === "12345") {
    return res.json({ success: true, message: "Donor login successful!" });
  }

  return res.json({ success: false, message: "Invalid credentials" });
});

router.get("/test", (req, res) => {
  res.send("Donor route working!");
});

export default router;
  