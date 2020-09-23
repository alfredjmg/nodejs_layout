// packages
const bcryptjs = require('bcryptjs');
// models
const User = require('../models/User');
// email
const { sendEmail } = require('../mail/mail');

exports.signUp = async (req, res) => {

    const { email, password } = req.body;

    try{
        let user = await User.findOne({ email });

        if(user){
            return res.status(400).json({ msg: 'El usuario ya existe'})
        }

        user = new User(req.body);

        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        await user.save();

        req.session.user = user;

        var data = {
            test1: 'test1',
            test2: 'test2'
        };
        var to = user.email;
        var subject = 'Thanks for your registration';
        var view = 'testView';
        // Sending email
        try{
            let resp = await sendEmail(data, to, subject, view);
            if(resp){
                console.log('Mail sended');
            }
        }catch(err){
            console.log(err);
            console.log('Error email')
            return res.status(400).json({
                ok: false,
                errors: "Error sending email, please try again"
            })
        }
        
        res.json(req.session);
        
    }catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

exports.logIn = async (req, res) => {

    const { email, password } = req.body;

    try{
        let UserDB = await User.findOne({ email });
        if(!UserDB){
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        const passCorrecto = await bcryptjs.compare(password, UserDB.password);
        if(!passCorrecto){
            return res.status(400).json({ msg: 'Password incorrecto' });
        }

        req.session.user = UserDB._id;
        res.json(req.session);
    }catch (error) {
        console.log(error);
    } 
}

exports.logOut = async (req, res) => {

    req.session = null;
    res.status(200).json({
        ok: true
    });

}