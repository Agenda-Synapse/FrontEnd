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
  cpfOuCnpj: string;
  telefone: string;
  cargo: string;
  idEstabelecimento: number | null;
}
