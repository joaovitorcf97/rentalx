import { Category } from "../../model/category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class ListCategoriesUseCases {
  constructor(private categoriesRepositories: ICategoryRepository) { }

  execute(): Category[] {
    const categories = this.categoriesRepositories.list();

    return categories;
  }
}

export { ListCategoriesUseCases };

