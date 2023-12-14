import mongoose from "mongoose";

const CoatchSchema = new mongoose.Schema({

    gametype: { type: String, required: true },
    worktime: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    mobile: { type: Number, required: true },
    photo: { type: String },

}

)

export default mongoose.model('Coatch', CoatchSchema);