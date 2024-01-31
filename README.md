## RETROFLIX
Projeto criado para testes de habilidades em Angular e .NET no estágio.

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

![Generic badge](https://img.shields.io/badge/STATUS-COMPLETO-<COLOR>.svg)
___
### Tópicos
:small_blue_diamond: [Descrição do projeto](#descrição)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Como rodar](#como-rodar)

:small_blue_diamond: [Desenvolvedores](#desenvolvedores)
___
### Descrição
O objetivo principal do projeto foi desenvolver um site onde o usuário possa realizar o CRUD de filmes e gêneros de filmes. Foi criada então o projeto Front end usando Angular e Angular Material, no projeto do Back end, .NET Framework, Entity Framework, C# e para o banco de dados, MYSQL.

### Funcionalidades
***FILME***
| | End point | Descrição|
|----|-----|-----|
GET | /Filme | Lista todos os filmes |
GET | /Filme/{id} | Lista o filme pelo id
POST | /Filme | Cadastra um filme novo
PUT | /Filme/{id} | Atualiza um filme pelo id
DELETE | /Filme/{id} | Deleta um filme pelo id

***GÊNERO DE FILME***
| | End point | Descrição|
|----|-----|-----|
GET | /api/Genero| Lista todos os gêneros |
GET | /api/Genero/{id} | Lista o gênero pelo id
POST | /api/Genero | Cadastra um gênero novo
PUT | /api/Genero/{id} | Atualiza um gênero pelo id
DELETE | /api/Genero/DeleteGeneroId/{id} | Deleta um gênero pelo id

___

### Como rodar

 1. Clone o repositório
 2. Instale as dependências com o comando `npm install`
 3. Configure a string de conexão com o banco de dados MYSQL
 4. Rode a solução do back end
 5. Utiliza o comando `npm start` para iniciar a aplicação do front end

___
### Desenvolvedores

| [<img src="https://avatars.githubusercontent.com/u/94928593?v=4" width=115><br><sub>Beatriz Tavernaro </sub>](https://github.com/beatavernaro)| [<img src="https://avatars.githubusercontent.com/u/131900862?v=4" width=115><br><sub>João Alencar</sub>](https://github.com/JoaoAlencar3294) |
|----|----|