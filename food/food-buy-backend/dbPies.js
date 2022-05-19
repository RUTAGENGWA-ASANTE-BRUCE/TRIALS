import Mongoose from "mongoose";

const pieSchema = new Mongoose.Schema({
    pieName: String,
    type: String,
    unitPrice: String,
    totalPrice: String,
    number: Number
})

export default Mongoose.model("pies", pieSchema);
