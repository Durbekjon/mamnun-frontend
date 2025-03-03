import { instanceWithoutToken, instanceWithToken } from "@/tools/api";

class visitService {
  async get() {
    return instanceWithToken.get("/api/v1/visit");
  }
  async add() {
    return instanceWithoutToken.post("/api/v1/visit");
  }
}
export const VisitService = new visitService();
