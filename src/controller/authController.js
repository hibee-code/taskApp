import { hashPassword, comparePasswords} from "../utils";
import { userModel } from "../model/userModel"



export async function register (req, res) {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    try {
        const user = await userModel.createUser({
            username,
            email,
            hashedPassword,
        })

        if (!user){
            return res.send("wrong credentials")
        }
        res.send('Registration successful!');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
}


export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userModel.findUserByEmail(email);

        if (user && await comparePasswords(password, user.password)) {
            req.session.user = { id: user.id, email: user.email };
            res.send('Login successful!');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
}

module.exports = { register, login};