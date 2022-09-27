const { Schema, model } = require("mongoose");

// Schema to create Thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: Use a getter method to format the timestamp on query
  },
  username: [
    {
      type: String,
      required: true,
    },
  ],
  reactions: [reactionSchema],
});

// Initialize our Thought model
const Thought = model("Thought", thoughtSchema);

// Schema to create Reaction - will not have associated model, but rather will be used at the reaction field's subdocument schema in the Thought model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: Use a getter method to format the timestamp on query
  },
});

module.exports = Thought;
