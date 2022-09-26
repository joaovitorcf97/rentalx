import { Request, Response } from 'express';
import { CreateSpecificationsUseCase } from '../createSpecification/CreateSpecificationsUseCase';

class CreateCategoryController {
  constructor(private createSpecificationsUseCase: CreateSpecificationsUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };

