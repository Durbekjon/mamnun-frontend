import { CreateQuoteRequestDto } from "@/interfaces/create-quote-request";
import { instanceWithoutToken, instanceWithToken } from "../tools/api";

class quoteRequestService {
  async create(data: CreateQuoteRequestDto) {
    return instanceWithoutToken.post("/api/v1/quote-request", data);
  }

  async get() {
    return instanceWithToken.get("/api/v1/quote-request");
  }

  async delete(id: string | number) {
    return instanceWithToken.delete("/api/v1/quote-request/" + id);
  }
}

export const QuoteRequestService = new quoteRequestService();
