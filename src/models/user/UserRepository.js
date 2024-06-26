import { user } from "../../data/Profile";
import User from "./User";

class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, name, email, fundacao) {
    const user = this.get(id);

    if (user) {
      user.name = name;
      user.email = email;
      user.fundacao = fundacao;
    }
    return user;
  }
}

const usersRepository = new UsersRepository();
const newUser = new User(user.name, user.email, parseInt(user.fundacao) || 0);

usersRepository.add(newUser);

export default usersRepository;
