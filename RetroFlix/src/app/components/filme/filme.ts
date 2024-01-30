import { Genero } from "../genero/genero";

export interface Filme{
    id: number,
    nomeFilme: string,
    diretor: string,
    duracao: number,
    genero: number,
    sinopse: string,
    imagem: string
}
