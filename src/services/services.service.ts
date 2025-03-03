import { instanceWithoutToken, instanceWithToken } from "../tools/api";
class servicesService {
  async getAll(type?: "edu" | "travel") {
    return instanceWithoutToken.get("/api/v1/services", {
      params: type ? { type } : {},
    });
  }

  async create(data: any) {
    return instanceWithToken.post("/api/v1/services", data);
    // return instanceWithoutToken
  }
  async update(id: number, data: any) {
    return instanceWithToken.patch("/api/v1/services/" + id, data);

    // return instanceWithoutToken
  }
  async delete(id: any) {
    return instanceWithToken.delete("/api/v1/services/" + id);

    // return instanceWithoutToken
  }
}
export const ServicesService = new servicesService();
