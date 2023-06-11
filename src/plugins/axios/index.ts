import axios from "axios";
import errorResponseHandler from "plugins/axios/errorResponseHandler";

const useAxiosInstance = () => {
  const baseURL: string | undefined = process.env.REACT_APP_BASE_URL;

  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  );

  return instance;
};

export default useAxiosInstance;
