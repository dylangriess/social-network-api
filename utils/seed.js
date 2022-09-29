const connection = require("../config/connection");
const { User, Thought } = require("../models");
const seedUsers = require("./data");
const seedThoughts = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(seedUsers);
  await Thought.collection.insertMany(seedThoughts);
  console.table(seedUsers);
  console.table(seedThoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
