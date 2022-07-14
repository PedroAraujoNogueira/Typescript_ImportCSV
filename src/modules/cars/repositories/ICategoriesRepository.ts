import { Category } from "../model/Category";

/* Um DTO(Data transfer Object) pode ser visto como um objeto que vai ser responsável por 
   fazer a transferencia de dados entre uma camada e outra da nossa aplicação.
*/

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
