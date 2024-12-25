const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
        },
    ],
});

categorySchema.set("toJSON", {
    transform: (_document, returnObject) => {
        returnObject.id = returnObject._id;
        delete returnObject._id;
        delete returnObject.__v;
    },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;