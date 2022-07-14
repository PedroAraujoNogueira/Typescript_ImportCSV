import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  create({ name, string }: ICreateSpecificationDTO): void {
    throw new Error("Method not found");
  }
}

export { SpecificationRepository };
