import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification alredy exists!');
    }
    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationsUseCase };

