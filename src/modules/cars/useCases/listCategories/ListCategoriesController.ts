import { Request, Response } from 'express';
import { ListCategoriesUseCases } from './ListCategoriesUseCases';

class ListCategoriesController {
  constructor(private listCategoriesUseCases: ListCategoriesUseCases) { }

  handler(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCases.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };

