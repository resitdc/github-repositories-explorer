import { AxiosError } from "axios";

declare global {
  type AxiosErrorResponse = AxiosError<any>;

  interface Action {
    type: string;
    payload: any;
  }
}
