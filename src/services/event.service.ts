import { instanceWithoutToken } from "../tools/api";
class eventService {
  getEvent() {
    return instanceWithoutToken.get("/api/v1/event-info");
  }
}
export const EventService = new eventService();
