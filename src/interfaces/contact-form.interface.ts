import { SubjectType } from "./create-contact-form";

export interface IContactForm {
  id: number;

  subject?: SubjectType;

  firstName: string;

  lastName: string;

  email: string;

  message: string;

  createdAt: Date;
}
