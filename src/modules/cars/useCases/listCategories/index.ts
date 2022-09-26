import { CategoriesRepositories } from "../../repositories/implementatios/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCases } from "./ListCategoriesUseCases";

const categoriesRepositories = CategoriesRepositories.getInstance();
const listCategoriesUseCases = new ListCategoriesUseCases(categoriesRepositories);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCases);

export { listCategoriesController };

