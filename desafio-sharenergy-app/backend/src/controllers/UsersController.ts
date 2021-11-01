import { Request, Response } from 'express';
import User from '../models/UsersModel';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import authConfig from '../config/auth';

class UsersController {
  async index(req: Request, res: Response) {
    await User.find()
      .then((response) => {
        res.status(200).json({ message: response });
      })
      .catch((e) => res.status(500).json({ message: e }));
  }

  async findById(req: Request, res: Response) {
    res.send('test users');
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const passwordHashed = await bcryptjs.hash(password, 10);

    const user = new User({
      name: name,
      email: email,
      password: passwordHashed,
    });

    await user
      .save()
      .then((response) => {
        res.status(200).json({ message: response });
      })
      .catch((e) => res.status(500).json({ message: e }));
  }

  async updateOne(req: Request, res: Response) {
    res.send('test users');
  }

  async deleteOne(req: Request, res: Response) {
    res.send('test users');
  }

  async authentication(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const comparedPassword = await bcryptjs.compare(password, user.password);

    if (!comparedPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jsonwebtoken.sign({}, authConfig.jwt.secret, {
      subject: String(email),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return res.json({ user, token });
  }
}

export default UsersController;
