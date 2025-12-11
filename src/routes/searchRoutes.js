const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/dishes", async (req, res) => {
  const { name, minPrice, maxPrice } = req.query;

  if (!name || !minPrice || !maxPrice) {
    return res.status(400).json({
      error: "name, minPrice, maxPrice are required",
    });
  }

  try {
    const [results] = await pool.query(
      `
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
      LIMIT 10;
      `,
      [`%${name}%`, minPrice, maxPrice]
    );

    res.json({ restaurants: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
