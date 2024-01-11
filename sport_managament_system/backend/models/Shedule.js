import mongoose from "mongoose";

const SheduleSchema = new mongoose.Schema({

    eventName: { type: String },
    date: { type: Date },
    time: { type: String },
    venue: { type: String },
    gameType: { type: String },

}

)

export default mongoose.model('Shedule', SheduleSchema);