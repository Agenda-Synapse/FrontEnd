export interface Loja {
  id: number;
  nome: string;
  imagem: string;
  endereco: string;
  categoria: string;
  createdAt: string;
  updatedAt: string;
}

export interface Proprietario {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  cnpj: string;
  telefone: string;
  cargo: number;
  idEstabelecimento: number;
}
