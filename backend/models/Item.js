const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
});

itemSchema.set("toJSON", {
    transform: (_document, returnObject) => {
        returnObject.id = returnObject._id;
        delete returnObject._id;
        delete returnObject.__v;
    },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;