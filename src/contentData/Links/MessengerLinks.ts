import telegramIcon from '../../images/telegram.png';
import viberIcon from '../../images/viber.png';
import whatsappIcon from '../../images/whatsapp.png';

export const messengerLinks = [
  {
    name: 'telegram',
    path: 'telegram-path',
    icon: telegramIcon
  },
  {
    name: 'viber',
    path: 'viber-path',
    icon: viberIcon
  },
  {
    name: 'whatsapp',
    path: 'whatsapp-path',
    icon: whatsappIcon
  }
] as const;
