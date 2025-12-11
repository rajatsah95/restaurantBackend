const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.get("/dishes", (req, res) => {
    const { name, minPrice, maxPrice } = req.query;

    if (!name || !minPrice || !maxPrice) {
        return res.status(400).json({
            error: "name, minPrice, maxPrice are required"
        });
    }

    const sql = `
      SELECT 
        r.id AS restaurantId,
        r.name AS restaurantName,
        r.city,
        m.dishName,
        m.price AS dishPrice,
        COUNT(o.id) AS orderCount
      FROM menu_items m
      JOIN restaurants r ON r.id = m.restaurantId
      LEFT JOIN orders o ON o.menuItemId = m.id
      WHERE m.dishName LIKE ?
        AND m.price BETWEEN ? AND ?
      GROUP BY r.id, m.id
      ORDER BY orderCount DESC
      LIMIT 10
    `;

    conn.query(sql, [`%${name}%`, minPrice, maxPrice], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Server error" });
        }
        res.json({ restaurants: results });
    });
});

module.exports = router;
