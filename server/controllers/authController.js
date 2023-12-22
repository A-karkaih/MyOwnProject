import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const Login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
       
        console.log("email and passworde are => ", email, password);
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const passw = bcrypt.compareSync(password, user.password);
        if (!passw) {
          return   res.status(404).json({ msg: "Wrong pass" });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        const { password : pass , ...rest } = user._doc;
        res.cookie("access_token", token, { httpOnly: true, secure: true, sameSite: 'None' }).
            status(200).
            json(rest);
        console.log(req.cookies);

        
    } catch (error) {
        next(error);
    }
   

}

export const Register = async (req, res, next) => {

    const { nom , email , password } = req.body;
    console.log("email and passworde are => ", email, password);
    const hashpassword = bcrypt.hashSync(password, 10);
    
    if (!nom || !email || !password) {

      return res.status(400).json({ msg: "all fields are mendatory" });
    }
    else {
        const userol = await User.findOne({ email });
        if (userol) {
            return res.status(404).json({ msg: "user already exist" });
        }
    }
    const user =  new User({
        nom,
        email,
        password: hashpassword,
    });

    try {
      await  user.save();
        res.status(201).json(user);
        

    } catch (error) {
        next(error);
    }


}
export const GoogleAuth = async  (req, res, next) => {
    const { email, nom } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = user._doc;
        res.cookie("access_token", token, { httpOnly: true, secure: true, sameSite: 'None' }).
            status(200).
            json(rest);
    } else {
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashedpassword = bcrypt.hashSync(generatedPassword, 10);
        const newUser = new User({
            nom,
            email,
            password: hashedpassword,
          
        });
        try {
            await newUser.save();
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = user._doc;
            res.cookie("access_token", token, { httpOnly: true, secure: true, sameSite: 'None' }).
                status(200).
                json(rest);
        } catch (error) {
            next(error);
            res.status(201).json(user);

        }
    }

}

export const SignOut = async (req, res, next) => {


}
