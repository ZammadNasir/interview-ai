import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @name registerUserController
 * @desc Controller to handle user registration
 * @route POST /api/auth/register
 * @access Public
 */
const registerUserController = async (req, res) => {

    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    const isUserExist = await userModel.findOne({ email });

    if(isUserExist) {
        return res.status(400).json({ message: "Account already exists with this email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

/**
 * @name loginUserController
 * @desc Controller to handle user login, expected to receive email and password in the request body
 * @route POST /api/auth/login
 * @access Public
 */
const loginUserController = async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({email})

    if(!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}


export {
    registerUserController,
    loginUserController
}