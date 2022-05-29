import { EDefaultResponseStatus } from "@enum/EDefaultResponseStatus"

interface IDefaultResponse {
  message: string | object;
  status: EDefaultResponseStatus;
  data: any;
  isError: boolean;
}

export interface IAuthResponse extends IDefaultResponse {
  message: string;
  data: object | null
}
