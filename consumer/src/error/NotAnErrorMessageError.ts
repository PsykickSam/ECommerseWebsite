import ErrorMessages from 'messages/ErrorMessages';
import BaseError from 'error/base/BaseError';

class NotAnErrorMessageError extends BaseError {
  constructor() {
    super(ErrorMessages.MSG_L000003);
  }
}

export default NotAnErrorMessageError;
