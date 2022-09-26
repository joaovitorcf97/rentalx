import { CategoriesRepositories } from "../../repositories/implementatios/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepositories = CategoriesRepositories.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositories);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };

