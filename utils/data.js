const seedUsers = [
  {
    username: "Jeffrey1",
    email: "jeffrey1@yahoo.com",
  },
  {
    username: "Becky2",
    email: "becky2@hotmail.com",
  },
  {
    username: "Harold3",
    email: "harold3@gmail.com",
  },
];
const seedThoughts = [
  {
    thoughtText: "I need to go to the grocery store today!",
    username: "Jeffrey1",
    userId: "",
  },
  {
    thoughtText: "Who wants Summer to end? Bring on Fall!",
    username: "Becky2",
    userId: "",
  },
  {
    thoughtText: "This morning looks better from bed. I think I'll stay.",
    username: "Harold3",
    userId: "",
  },
];

module.exports = { seedUsers, seedThoughts };
