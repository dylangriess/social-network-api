const { Schema } = require("mongoose");

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

module.exports = reactionSchema;
