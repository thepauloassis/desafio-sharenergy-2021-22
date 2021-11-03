import { Request, Response } from 'express';
import Client from '../models/ClientModel';
import validator from 'validator';

class ClientController {
  async index(req: Request, res: Response) {
    await Client.find()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((e) => res.status(500).json({ message: e }));
  }

  async findById(req: Request, res: Response) {
    const id = req.params.id;

    await Client.findOne({ _id: id })
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((e) => res.status(500).json({ message: e }));
  }

  async create(req: Request, res: Response) {
    const client = new Client(req.body);

    /* if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({ message: 'Invalid e-mail' });
    } */

    await client
      .save()
      .then((response) => {
        res.status(200).json({ response });
      })
      .catch((e) => res.status(500).json({ message: e }));
  }

  async updateOne(req: Request, res: Response) {
    const id = req.params.id;

    const client = new Client(req.body);

    await Client.findByIdAndUpdate(id, req.body)
      .then(async (response) => {
        res.status(200).json({ message: response });
      })
      .catch((e) => res.status(500).json({ message: e }));
  }

  async deleteOne(req: Request, res: Response) {
    const id = req.params.id;

    await Client.deleteOne({ _id: id })
      .then((response) => {
        res.status(200).json({ message: response });
      })
      .catch((e) => res.status(500).json({ message: e }));
  }
}

export default ClientController;
