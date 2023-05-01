import type {
  aboutCompanyLinks,
  confederationPolicyLink,
  menuLinks1,
  menuLinks2,
  messengerLinks,
  navLinks
} from '../contentData';

export type NavLink = (typeof navLinks)[number];
export type AboutCompanyLink = (typeof aboutCompanyLinks)[number];
export type MenuLink1 = (typeof menuLinks1)[number];
export type MenuLink2 = (typeof menuLinks2)[number];

export type LinkListType = AboutCompanyLink | MenuLink1 | MenuLink2;

export type NavLinkTuple = typeof navLinks;
export type AboutCompanyLinkTuple = typeof aboutCompanyLinks;
export type MenuLinkTuple1 = typeof menuLinks1;
export type MenuLinkTuple2 = typeof menuLinks2;
export type ConfederationPolicyLink = typeof confederationPolicyLink;

export interface ICompanyContacts {
  phoneNumber: '+7 555 555-55-55'
  address?: 'Москва, Путевой проезд 3с1, к 902'
  messengers: typeof messengerLinks
}
