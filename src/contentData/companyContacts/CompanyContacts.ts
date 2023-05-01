import type { ICompanyContacts } from '../../types';
import { messengerLinks } from '../Links/MessengerLinks';

export const allCompanyContacts: ICompanyContacts = {
  phoneNumber: '+7 555 555-55-55',
  address: 'Москва, Путевой проезд 3с1, к 902',
  messengers: messengerLinks
} as const;

export const companyContacts: ICompanyContacts = {
  phoneNumber: '+7 555 555-55-55',
  messengers: messengerLinks
} as const;
