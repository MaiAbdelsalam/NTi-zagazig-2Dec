import {Router}  from "express";
import categoriesService from "./categories.service";
import subcategoriesRouter from "../subcategries/subcategories.route";
const categoriesRouter:Router= Router();
categoriesRouter.use('/:categoryId/subcategories', subcategoriesRouter)
categoriesRouter.route('/')
.get(categoriesService.getAll)
.post(categoriesService.createOne);
categoriesRouter.get('/',categoriesService.getAll);

categoriesRouter.route('/:id')
.get(categoriesService.getOne)
.put(categoriesService.updateOne)
.delete(categoriesService.deleteOne)
export default categoriesRouter;


