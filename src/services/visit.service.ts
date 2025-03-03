import { instanceWithoutToken, instanceWithToken } from "@/tools/api";

const VISIT_KEY = "visit";
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 1 kun = 86400000 ms

class visitService {
  async get() {
    return instanceWithToken.get("/api/v1/visit");
  }

  async add() {
    try {
      return await instanceWithoutToken.post("/api/v1/visit");
    } catch (error) {
      console.error("Failed to add visit:", error);
    }
  }

  trackVisit() {
    if (typeof window === "undefined") return; // Prevents errors in SSR

    const visit = localStorage.getItem(VISIT_KEY);
    const now = Date.now();

    if (!visit || now - Number(visit) > ONE_DAY_MS) {
      localStorage.setItem(VISIT_KEY, now.toString());
      this.add();
    }
  }
}

// Singleton export
export const VisitService = new visitService();
