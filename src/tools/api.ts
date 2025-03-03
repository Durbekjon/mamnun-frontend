import axios from "axios";
export class ApiInstance {
  instance;

  constructor(withToken: boolean = false) {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    if (withToken) {
      this.instance.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      });

      this.instance.interceptors.response.use(
        (response) => response,
        (err) => {
          if (err.response?.status === 401 || err.response?.status === 403) {
            localStorage.removeItem("access-token");

            window.location.href = "/";
          }
          throw err;
        }
      );
    } else {
      this.instance.interceptors.response.use(
        (response) => response,
        (err) => {
          console.error("API Error:", err);
          throw err;
        }
      );
    }
  }
}

// Instances
export const instanceWithToken = new ApiInstance(true).instance;
export const instanceWithoutToken = new ApiInstance(false).instance;
