import Equipment from '../models/Equipment.js';


export const showEquipment = async (req, res) => {

    try {
        const allEquipment = await Equipment.find();
        res.status(200).json(allEquipment);

    } catch (error) {
        res.status(400).json({ success: false, message: 'Equipment Create No' });
    }
}

export const addEquipment = async (req, res) => {
    //console.log(req.body);
    const { gametype, name, qty, available } = req.body;

    try {
        const newEquipment = new Equipment({
            name,
            gametype,
            qty,
            available



        });

        await newEquipment.save();

        res.status(200).json({ success: true, message: 'Equipment Create Ok' });

    } catch (error) {
        res.status(400).json({ success: false, message: `Equipment Create No ${error}` });

    }
}

export const deleteEquipment = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Equipment.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ message: `Delete Ok` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: 'Equipment Delete No' });
    }
}

export const updateEquipment = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    try {
        const deleted = await Equipment.findByIdAndUpdate(id, updateData, { new: true });
        if (deleted) {
            res.status(200).json({ message: `Delete Ok` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: 'Equipment Delete No' });
    }
}
