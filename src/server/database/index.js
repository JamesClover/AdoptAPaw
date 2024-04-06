require('dotenv').config();
const { Client } = require('pg');
const catData = require('../../data/catData');

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

// async function createTable() {
//   try {
//     await client.connect();

//     await client.query('DROP TABLE IF EXISTS cat');

//     await client.query(`
//     CREATE TABLE cat (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(100),
//       age INT,
//       breed VARCHAR(100),
//       gender VARCHAR(10),
//       color VARCHAR(100),
//       size VARCHAR(20),
//       description TEXT,
//       biography TEXT,
//       temperment VARCHAR(50),
//       compatibility VARCHAR(50),
//       status VARCHAR(20),
//       health VARCHAR(50),
//       location VARCHAR(100),
//       fee INT,
//       image VARCHAR(255)
//       )
//     `);

//     console.log('Table "cat" created successfully');

//     await seedData();

//     await client.end();
//   } catch (error) {
//     console.error('Error creating table:', error);
//   }
// }

// async function seedData() {
//   try {
//     for (const cat of catData) {
//       await client.query(
//         'INSERT INTO cat (name, age, breed, gender, color, size, description, biography, temperment, compatibility, status, health, location, fee, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
//         [cat.name, cat.age, cat.breed, cat.gender, cat.color, cat.size, cat.description, cat.biography, cat.temperment, cat.compadibility, cat.status, cat.health, cat.location, cat.fee, cat.image]
//       );
//     }

//     console.log('Data seeded successfully');
//   } catch (error) {
//     console.error('Error seeding data:', error);
//   }
// }

// createTable();

client.connect()
.then(() => {
  console.log("connected to Postgres")
})
.catch((err) => {
  console.error("connection error", err.stack)
});

module.exports = client;