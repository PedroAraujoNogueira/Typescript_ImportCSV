import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  /* Object.assign é uma função do próprio javascript, onde podemos passar um
     objeto para essa função e os atributos que queremos atribuir para esse 
     objeto, ou seja, é como se estivessemos atribuindo item a item(name, description 
     e created_at) para dentro do nosso category .
  */
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
