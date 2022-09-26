import { SpecificationsRepository } from "../../repositories/implementatios/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category alredy exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };

