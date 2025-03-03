import { instanceWithoutToken, instanceWithToken } from "../tools/api";
class infoService {
  async get() {
    return instanceWithoutToken.get("/api/v1/information");
  }

  async update(id: number, data: { phoneNumber: string; mail: string }) {
    return instanceWithToken.patch("/api/v1/information/" + id, data);
  }
}
export const InfoService = new infoService();
