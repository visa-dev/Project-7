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
    //console.log(req.body);
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

export const deleteCoatch = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Coatch.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ message: `Delete Ok` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: 'Coatch Delete No' });
    }
}
