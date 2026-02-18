// Import library
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Buat aplikasi
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi database
const db = mysql.createConnection({
  host: "192.168.2.100",   // ganti IP / domain server
  user: "sa",
  password: "Vander1512",
  database: "31JAN2026",
  port: 3306,               // sesuaikan kalau beda
});

// Cek koneksi
db.connect(err => {
  if (err) {
    console.log("Gagal konek DB:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// API contoh: ambil data siswa
app.get("/DOKTER", (req, res) => {
  const sql = "SELECT * FROM DOKTER";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    res.json(result);
  });
});

// Jalankan server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});