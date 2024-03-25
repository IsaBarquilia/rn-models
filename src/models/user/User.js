export default class User {
  constructor(name, email, fundacao, descricao) {
    this.id = this.generateId();
    this.name = name;
    this.email = email;
    this.fundacao = fundacao;
    this.descricao = descricao;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
