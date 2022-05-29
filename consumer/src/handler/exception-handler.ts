import { IExceptionHandling } from 'interface/IExceptionHandling';

const ExceptionHandler = {
  async: async (callback: Function): Promise<IExceptionHandling> => {
    const returnable: IExceptionHandling = {} as IExceptionHandling;

    try {
      returnable.isError = false;
      returnable.message = '';
      returnable.processedData = await callback();
    } catch (error: any) {
      returnable.isError = true;
      returnable.message = error instanceof Error ? error.message : '';
      returnable.processedData = null;
    }

    return returnable;
  },
  sync: () => {

  },
};

export default ExceptionHandler;
