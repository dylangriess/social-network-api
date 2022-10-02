const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { seedThoughts, seedUsers } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.insertMany(seedUsers);
  await Thought.insertMany(seedThoughts);
  console.table(seedUsers);
  console.table(seedThoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
