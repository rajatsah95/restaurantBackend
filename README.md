# Restaurant
----------------------

# Folder Structure
----------------------
restaurantBackend/
│── src/
│   ├── config/db.js
│   ├── routes/searchRoutes.js
│   └── seed/seed.js
│
├── .env
├── .gitignore
├── README.md
├── package.json
└── server.js


## Setup steps
## 1. clone repository in vs code by 'git clone https://github.com/rajatsah95/restaurantBackend.git'
## 2. install dependencies by 'npm i'
## 3. create .env file inside restaurantBackend folder and then add variable 'MYSQL_URL' for MYSQL storage, variable PORT for server as key in it.
## 4. create tables and insert data into it, by 'npm run seed'
## 5. run server by 'npm start'
## 6. use below api for restaurantBackend

# deployed link
## backend - https://restaurantbackend-bhva.onrender.com/


# github link
## backend - https://github.com/rajatsah95/restaurantBackend

# get the top 10 restaurants where that dish has been ordered the highest number of times
--------------
GET/       https://restaurantbackend-bhva.onrender.com/search/dishes?name=chicken&minPrice=150&maxPrice=300

query parameters-
name as   'chicken'
minPrice   as   '150'
maxPrice   as   '300'
