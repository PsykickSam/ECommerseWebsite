import BaseError from 'error/base/BaseError';
import ErrorMessages from 'messages/ErrorMessages';
import Utils from 'utils/Utils';

class RequestHandlingError extends BaseError {
  constructor(message: string) {
    super(`${ErrorMessages.MSG_L000002}\n${Utils.errorMessageParser(ErrorMessages.MSG_2L00001, message)}`);
  }
}

export default RequestHandlingError;
