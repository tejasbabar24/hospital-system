import axios from "axios";
import { getAuth, clearAuth } from "../utils/storage.js";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEEND_URL || "http://localhost:5000/api",
});

// Attach token automatically
axiosInstance.interceptors.request.use((config) => {
  const auth = getAuth();

  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
  }

  return config;
});

// Auto logout on 401
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      clearAuth();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;