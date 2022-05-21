import { Category } from "../model/Category";

/* A Interface pode ser vista como um objeto que vai ser responsável por 
   fazer a transferencia de dados entre uma camada e outra da nossa aplicação.
*/
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
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

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
