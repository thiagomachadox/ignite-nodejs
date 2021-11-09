import { Router } from "express";

import { createCategoryController } from "../modules/cars/usecases/CreateCategory";
import { listCategoriesController } from "../modules/cars/usecases/ListCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
