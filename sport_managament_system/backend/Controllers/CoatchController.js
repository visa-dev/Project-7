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

    const { gametype, name, gender, dob, email, mobile, photo } = req.body;



    try {
        const newCoatch = new Coatch({
            gametype: gametype,
            name: name,
            gender: gender,
            dob: dob,
            email: email,
            mobile: mobile,
            photo: photo


        });


        await newCoatch.save();

        res.status(200).json({ success: true, message: 'Coatch Create Ok' });

    } catch (error) {
        res.status(400).json({ success: false, message: `Coatch Create No ${error}` });

    }
}
