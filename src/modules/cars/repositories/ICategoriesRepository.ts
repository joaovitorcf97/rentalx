import { Category } from "../entities/category";

interface ICrateCategoryDTO {
  name: string;
  description: string;
}


interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICrateCategoryDTO): void;
}

export { ICategoryRepository, ICrateCategoryDTO };
