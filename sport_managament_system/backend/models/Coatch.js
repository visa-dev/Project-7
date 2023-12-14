import mongoose from "mongoose";

const CoatchSchema = new mongoose.Schema({

    gametpe: { type: String required:},
    worktime: { type: String required: true },
    name: { type: String required: true },
    gender: { type: String required: true },
    dob: { type: String required: true },
    email: { type: String required: true, unique: true },
    mobile: { type: Number required: true },
    photo: { data: Buffer required: true },

}

)

export default mongoose.model('Coatch',CoatchSchema);