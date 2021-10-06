// Cria TIPOS de objeto para ser usados como Email
interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

// Cria uma interface que ingloba as outras em forma de objeto
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}
// DTO = Data Transfer Object (DDD)

// Tipa uma classe
interface IEmailService {
  sendMail(request: IMessageDTO): void; //Obriga a ter o método sendMail com caractéristicas
}

// TIPA parâmetros, até mesmo de objetos.
class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
