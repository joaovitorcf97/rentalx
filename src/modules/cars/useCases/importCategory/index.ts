import { CategoriesRepositories } from "../../repositories/implementatios/CategoriesRepositories";
import { ImportCategoryController } from "./ImportCategory.Controller";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepositories.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };

