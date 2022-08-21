import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // A versão 3.8 adicionou os campos privados, que é uma maneira de declarar
  // que um campo de uma classe é inacessível fora daquela classe, incluindo subclasses.
  private categories: Category[];

  // O ES6 inclui membros estáticos e o TypeScript também. Os membros estáticos de uma
  // classe são acessados ​​usando o nome da classe e a notação de ponto, sem criar um
  // objeto, por exemplo, <ClassName>.<StaticMember>.
  private static INSTANCE: CategoriesRepository;

  // Alterar o escopo de um construtor para private remove nossa capacidade de usar
  // a palavra-chave new fora da classe.
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    /* Object.assign é uma função do próprio javascript, onde podemos passar um
       objeto para essa função e os atributos que queremos atribuir para esse 
       objeto, ou seja, é como se estivessemos atribuindo item a item(name, description 
       e created_at) para dentro do nosso category.
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
