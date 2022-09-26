import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

  handle(request: Request, reponse: Response) {
    const { file } = request;

    this.importCategoryUseCase.execute(file);
    return reponse.send();
  }
}

export { ImportCategoryController };

