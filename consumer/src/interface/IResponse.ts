import EnumStatusIResponse from 'enumeration/StatusIResponse';

export interface IResponse {
  isError: boolean;
  message: string;
  status: EnumStatusIResponse;
  data: Array<object> | object | string | null;
}
