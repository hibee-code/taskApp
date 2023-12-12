import { hashPassword, comparePasswords} from "../utils/index.js";
import { createUser, findUserByEmail }  from "../model/userModel.js"




export async function register (req, res) {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await hashPassword(password);

        const user = createUser({
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
    try {
        const { email, password } = req.body;

        const user = findUserByEmail(email);

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

