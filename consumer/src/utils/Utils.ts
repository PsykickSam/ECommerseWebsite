import NotAnErrorMessageError from 'error/NotAnErrorMessageError';

const Utils = {
  errorMessageParser: (message: string, ...args: Array<string>) => {
    if (message.search(/([{0-9}])/g) === -1) {
      throw new NotAnErrorMessageError();
    }

    if (args.length !== (message.match(/[{0-9}]{3}/g) || '').length) {
      // TODO: THROW NEW EXCEPTION
    }

    const regex = new RegExp('(\\{\\d\\})');
    let index = 0;

    while (regex.exec(message) !== null) {
      message = message.replace(regex, args[index]);
      index += 1;
    }

    return message;
  },
};

export default Utils;
