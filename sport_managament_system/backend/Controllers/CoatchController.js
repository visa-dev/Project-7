import Coatch from '../models/Coatch.js';


export const showCoatch = async (req, res) => {

    try {
        const allCoatch = await Coatch.find();
        res.status(200).json(allCoatch);

    } catch (error) {
        res.status(400).json({ success: false, message: 'Coatch Create No' });
    }
}

export const addCoatch = async (req, res) => {

    const { gametype, worktime, name, gender, dob, email, mobile, photo } = req.body;
    const newCoatch = new Coatch({
        gametype,
        worktime,
        name,
        gender,
        dob,
        email,
        mobile,
        photo

    });

    try {

        await newCoatch.save();
        res.status(200).json({ success: true, message: 'Coatch Create Ok' });

    } catch (error) {
        res.status(400).json({ success: false, message: 'Coatch Create No' });
    }
}
