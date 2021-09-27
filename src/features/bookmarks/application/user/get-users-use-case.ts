import {UserRepository} from "../../domain/user/user-repository";

export class GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(token: string) {
    return this.userRepository.get(token)
  }
}
