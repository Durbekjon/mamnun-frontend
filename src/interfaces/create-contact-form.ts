export interface SubjectType {
  edu: "edu";
  travel: "travel";
  business: "business";
  other: "other";
}

export interface CreateContactFormDto {
  subject?: string;

  firstName: string;

  lastName: string;

  email: string;

  message: string;
}
