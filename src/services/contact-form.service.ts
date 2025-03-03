import { CreateContactFormDto } from "@/interfaces/create-contact-form";
import { instanceWithoutToken, instanceWithToken } from "../tools/api";
class contactFormService {
  async create(data: CreateContactFormDto) {
    return instanceWithoutToken.post("/api/v1/contact-form", data);
  }

  async get() {
    return instanceWithToken.get("/api/v1/contact-form");
  }

  async delete(id: number | string) {
    return instanceWithToken.delete("/api/v1/contact-form/" + id);
  }
}
export const ContactFormService = new contactFormService();
