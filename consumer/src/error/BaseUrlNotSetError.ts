import ErrorMessages from 'messages/ErrorMessages';
import BaseError from 'error/base/BaseError';

class BaseUrlNotSetError extends BaseError {
  constructor() {
    super(ErrorMessages.MSG_L000001);
  }
}

export default BaseUrlNotSetError;
