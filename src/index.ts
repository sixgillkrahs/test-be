import express, { Request, Response } from 'express';
import { createUser, getAllUsers } from './services/userService';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/users', async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.json(users);
});

app.post('/users', async (req: Request, res: Response) => {
    const { email, name } = req.body;
    const user = await createUser(email, name);
    res.json(user);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});