import { CreateContactFormDto } from "@/interfaces/create-contact-form";
import { instanceWithoutToken, instanceWithToken } from "../tools/api";
import { ILogin } from "@/interfaces/login.interface";
class authService {
  login(data: ILogin) {
    return instanceWithoutToken.post("/api/v1/auth/login", data);
  }
  me() {
    return instanceWithToken.get("/api/v1/auth/me");
  }
  refreshTokens() {
    return instanceWithToken.post("/api/update-tokens");
  }
}
export const AuthService = new authService();
