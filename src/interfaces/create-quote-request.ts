export const QuoteTypeValues = {
  EDU: "EDU",
  TRAVEL: "TRAVEL",
} as const;

export type QuoteType = keyof typeof QuoteTypeValues;

export interface CreateQuoteRequestDto {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
  quoteType: QuoteType;
  serviceId: number;
}
