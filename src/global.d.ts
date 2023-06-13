import { AxiosError } from "axios";
import { RootState } from "plugins/redux/reducers";

declare global {
  type AxiosErrorResponse = AxiosError<any>;
  type RootStateType = RootState<any>;

  interface Action {
    type: string;
    payload: any;
  }
}
