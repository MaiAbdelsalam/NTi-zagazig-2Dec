import express  from "express";
import categoriesRouter from "../category/categories.routes";
import subcategoriesRouter from "./subcategories.route";
declare module "express"{
    interface Request{
        filterData?:any;
    }
}

const mountRoutes=(app:express.Application)=>{
    app.use("/api/v1/categories",categoriesRouter)

app.use('/api/v1/subcategories',subcategoriesRouter);

}
export default mountRoutes