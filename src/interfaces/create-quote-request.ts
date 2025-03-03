export const RequestTypeValues = {
  INTERNSHIPS: "INTERNSHIPS",
  TEACHER_TRAININGS: "TEACHER_TRAININGS",
  SHORT_TERM_PROGRAMS: "SHORT_TERM_PROGRAMS",
  DEGREE_PROGRAMS: "DEGREE_PROGRAMS",
  TOUR_PACKAGE: "TOUR_PACKAGE",
  FULL_VIP_ASSISTANCE: "FULL_VIP_ASSISTANCE",
  MEET_AND_GREET_FAST_TRACK: "MEET_AND_GREET_FAST_TRACK",
  GROUND_TRANSPORTATION: "GROUND_TRANSPORTATION",
} as const;

export type RequestType = keyof typeof RequestTypeValues;

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
  requestType: RequestType; // ✅ Matches backend expectations
}
