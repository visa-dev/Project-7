import Coatch from '../models/Coatch.js';


export const showCoatch = async (req, res) => {

    try {
        res.send("Api is worknggg");
    } catch (error) {

    }
}

export const addCoatch = async (req, res) => {

    const { gametype, worktime } = req.body;
    const newCoatch = new Coatch({
        gametype,
        worktime
    });

    try {

        await newCoatch.save();
        res.status(200).json({ success: true, message: 'Coatch Create Ok' });

    } catch (error) {
        res.status(400).json({ success: false, message: 'Coatch Create No' });
    }
}
