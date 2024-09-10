import { CustomError } from '@/errors/CustomError';
import { ResponseHandler } from './response';
import { Response } from 'express';

export const ErrorHandler = {
  // Handle error
  handleError: function (res: Response, error: unknown) {
    if (error instanceof CustomError) return this.handleCustomError(res, error);

    return ResponseHandler.error(res, 500, 'Internal Server Error', null);
  },

  // Handle custom error
  handleCustomError: function (res: Response, error: CustomError) {
    return ResponseHandler.error(res, error.status, error.message, null);
  },
};
