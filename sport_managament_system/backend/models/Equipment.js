import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({

    name: { type: String },
    gametype: { type: String },
    qty: { type: String },
    available: { type: String },
   
}

)

export default mongoose.model('Equipment', EquipmentSchema);