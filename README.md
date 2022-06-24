## 📖 iBooks

▶️ Aplicação de busca de livros desenvolvido com `React.js`, `Context API`, `Sass/Scss`, `TypeScript`, `ESlint` e `Stylelint`.

▶️ A aplicação é capaz de:
  
  - Buscar livros pelo título, autor ou idioma;
  - Listar livros (título, autor, idioma, ano);
  - Apresentar quantidades de registros encontrados;
  - Paginar o resultado da busca de 10 em 10 ítens;
  - Filtrar livros pelo período (ano);

### ⚙️ Instalação

  - Clone este repositório:
  ```
  git@github.com:adilsongb/ibooks.git
  ```

  - Acesse a pasta do projeto:
  ```
  cd ibooks
  ```
  
  - Instale as dependências do projeto:
  ```
  npm install
  ```

⚠️ iBooks deve consultar os dados de um servidor de API localmente (use [este repositório](https://github.com/beonica/jsonserver) para rodar um servidor na sua máquina) ou use a url do servidor hospedado no heroku com o seguinte endereço: `https://ibook-api.herokuapp.com/`.

⚠️ Caso prefira usar o servidor hospedado na nuvem, crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo: `REACT_APP_URL_API="https://ibook-api.herokuapp.com/"`.

  - Inicie a aplicação React:

  ```
  npm start
  ```

### 🧪 Testes

▶️ Para rodar os testes da aplicação use o seguinte comando:

```
npm test
```

 - Todos os testes estão na pasta `src/tests`.
