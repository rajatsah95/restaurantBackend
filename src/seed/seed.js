const pool = require("../config/db");

(async () => {
  const conn = await pool.getConnection();

  await conn.query("DROP TABLE IF EXISTS orders");
  await conn.query("DROP TABLE IF EXISTS menu_items");
  await conn.query("DROP TABLE IF EXISTS restaurants");

  await conn.query(`
    CREATE TABLE restaurants (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      city VARCHAR(255)
    );
  `);

  await conn.query(`
    CREATE TABLE menu_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      restaurantId INT,
      dishName VARCHAR(255),
      price FLOAT,
      FOREIGN KEY (restaurantId) REFERENCES restaurants(id)
    );
  `);

  await conn.query(`
    CREATE TABLE orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      menuItemId INT,
      FOREIGN KEY (menuItemId) REFERENCES menu_items(id)
    );
  `);

  // Insert Restaurants
  const [r1] = await conn.query(`INSERT INTO restaurants (name, city) VALUES 
     ("Hyderabadi Spice House", "Hyderabad"),
        ("Biryani Palace", "Bangalore"),
        ("Spice Garden", "Chennai"),
        ("Royal Dum Biryani", "Delhi"),
        ("Northern Thali Corner", "Mumbai"),
        ("Coastal Catch", "Mangalore"),
        ("Andhra Ruchulu", "Vijayawada"),
        ("Kebab Street", "Lucknow"),
        ("Tandoori Flames", "Kolkata"),
        ("Punjabi Haveli", "Amritsar"),
        ("Malabar Treats", "Kochi"),
        ("The Urban Dhaba", "Pune"),
        ("Rajasthan Rasoi", "Jaipur"),
        ("BBQ Smokehouse", "Hyderabad"),
        ("South Masala Café", "Coimbatore"),
        ("Flavours of Goa", "Panaji"),
        ("The Curry Pot", "Chandigarh"),
        ("Oriya Spice Kitchen", "Bhubaneswar"),
        ("Naga Kitchen", "Kohima"),
        ("Himalayan Bites", "Gangtok"),
        ("Assam Spice Hub", "Guwahati"),
        ("The Gujarati Thali House", "Ahmedabad"),
        ("Deccan Diner", "Nagpur"),
        ("Maratha Spice Route", "Aurangabad"),
        ("The Coastal Curry House", "Udupi")
  `);

  // Insert Menu Items
  const [m1] = await conn.query(`
    INSERT INTO menu_items (restaurantId, dishName, price) VALUES
        (1, "Chicken Biryani", 220),
        (2, "Chicken Fry Biryani", 250),
        (3, "Chicken Hyderabadi Biryani", 280),
        (4, "Chicken Butter Masala", 270),
        (5, "Chicken Curry", 200),
        (6, "Chicken Tandoori Leg Piece", 300),
        (7, "Chicken Roast", 290),
        (8, "Chicken Chettinad", 260),
        (9, "Chicken Mughlai", 300),
        (10, "Chicken Keema Curry", 180),
        (11, "Chicken Masala", 190),
        (12, "Chicken Korma", 250),
        (13, "Chicken Lollipop", 220),
        (14, "Tandoori Chicken", 300),
        (15, "Chicken Shawarma", 160),
        (16, "Chicken Momos", 180),
        (17, "Chicken Fried Rice", 200),
        (18, "Chicken Pepper Fry", 240),
        (19, "Chicken 65", 220),
        (20, "Chicken Manchurian", 220),
        (21, "Chicken Tikka", 280),
        (22, "Chicken Handi", 260),
        (23, "Chicken Pulao", 190),
        (24, "Chicken Garlic Fry", 210),
        (25, "Chicken Kebab", 250)
  `);

  // Insert Orders
  let orders = [];
  for (let i = 1; i <= 1; i++) orders.push([1]);
  for (let i = 1; i <= 2; i++) orders.push([2]);
  for (let i = 1; i <= 3; i++) orders.push([3]);
  for (let i = 1; i <= 4; i++) orders.push([4]);
  for (let i = 1; i <= 5; i++) orders.push([5]);
  for (let i = 1; i <= 6; i++) orders.push([6]);
  for (let i = 1; i <= 7; i++) orders.push([7]);
  for (let i = 1; i <= 8; i++) orders.push([8]);
  for (let i = 1; i <= 9; i++) orders.push([9]);
  for (let i = 1; i <= 10; i++) orders.push([10]);
  for (let i = 1; i <= 11; i++) orders.push([11]);
  for (let i = 1; i <= 12; i++) orders.push([12]);
  for (let i = 1; i <= 13; i++) orders.push([13]);
  for (let i = 1; i <= 14; i++) orders.push([14]);
  for (let i = 1; i <= 15; i++) orders.push([15]);
  for (let i = 1; i <= 16; i++) orders.push([16]);

  await conn.query(
    `INSERT INTO orders (menuItemId) VALUES ?`,
    [orders]
  );

  console.log("Database seeded successfully!");
  conn.release();
  process.exit();
})();
