import { Request, Response } from 'express';
// Importa os Tipos do express, para definir na função
import EmailService from '../services/EmailService';

const users = [{ name: 'Bobnini', email: 'bobnini@gmail.com' }]; // Cria uma listagem de usuários

export default {
  // Define os paramêtros com os tipos do Express
  async index(req: Request, res: Response) {
    return res.json(users); // Retorna lista em JSON
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Bobnini Guimarães',
        email: 'Bobnini@gmail.com',
      },
      message: {
        subject: 'Testando Typescript',
        body: 'Criando um serviço de enviar email com classe, fortemente tipado',
      },
    });
    return res.send();
  },
};
