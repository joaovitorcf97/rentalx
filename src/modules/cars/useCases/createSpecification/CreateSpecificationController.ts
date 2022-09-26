import { Request, Response } from 'express';
import { CreateSpecificationsUseCase } from './CreateSpecificationsUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationsUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };

