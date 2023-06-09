import mongoose, { Schema, model, models } from "mongoose";

// Schema for a prompt
const PromptSchema = new Schema({
  creator:{
    type: mongoose.Schema.Types.ObjectId,  
    ref: "User",
  },
  prompt:{
    type: String,
    required: [true, 'Prompt is required!'],
  },
  tag:{
    type: String,
    required: [true, 'Tag is required!'], 
  }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;