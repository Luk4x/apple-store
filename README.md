<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/status-developing-lightgrey?style=for-the-badge&logo=headspace&logoColor=yellow&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/apple-store?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# 🛍️ Apple Store Project

<br>
<p align="center">
  <a href="#-apresentação-em-vídeo-do-projeto">Vídeo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-páginas">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demais-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-o-projeto">Clone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato-dos-contribuintes">Contato</a>
</p>
<br>

## 📹 Apresentação em Vídeo do Projeto
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/212575676-5bdf0e59-e2d9-41e8-9019-a62f8aba4b91.mp4" />
</div>

> **Caso o vídeo apresente algum erro, recarregue a página!**<br>
> Acesse o projeto online **[AQUI]()**

## 🚀 Tecnologias Utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [Stripe](https://stripe.com/en-br)
- [ReactJS](https://pt-br.reactjs.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth](https://next-auth.js.org/)
- [Sanity.io](https://www.sanity.io/)
- [HeadlessUI](https://headlessui.com/)
- [React Responsive](https://www.npmjs.com/package/react-responsive)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Currency Formatter](https://www.npmjs.com/package/react-currency-formatter)
- [React use Scroll Position](https://www.npmjs.com/package/react-use-scroll-position)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Random String](https://www.npmjs.com/package/random-string)
- [NodeJS](https://nodejs.org)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## 📝 Sobre

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!

A aplicação se consiste principalmente em ser um E-Commerce da Apple, simulando um fluxo de compra completo, onde o usuário pode ou não se autenticar através de sua conta Google, adicionar e remover produtos do seu carrinho, simular o pagamento desses produtos através do ambiente de testes do Stripe, e ao final será redirecionado para uma página de confirmação e agradecimento.
E digo principalmente, pois esse projeto está em constante evolução, podendo ser conferida na sessão de [Etapas](#%EF%B8%8F-etapas).<br>

Aprendi e continuo aprendendo muito durante o desenvolvimento desse projeto, e meu propósito com ele era me aprofundar mais em Next, Typescript, Redux e Tailwind.

### 📄 Páginas e Rotas

#### A aplicação tem um total de 3 componentes de página, sendo eles:

  - **pages/index**: Essa é a Home da aplicação, onde o usuário pode efetuar o LogIn/LogOut, e adicionar produtos ao carrinho. Os produtos são buscados da base de dados utilizando o conceito de SSR.
  - **pages/checkout**: Essa é a página de revisão da compra, onde o usuário pode remover produtos do carrinho e seguir com o pagamento, sendo redirecionado para o ambiente de teste do Stripe - uma página de pagamento.
  - **pages/success**: Após ter preenchido os dados e efetuado o pagamento na página do Stripe, o usuário será redirecionado para essa página, que é a de confirmação e agradecimento pela compra.
 
#### A aplicação tem um total de 5 componentes de rota, sendo eles:

  - **pages/api/auth/[...nextauth]**: Esse é o arquivo de configurações globais do NextAuth.
  - **pages/api/checkout_sessions**: Essa rota é responsável por transformar os dados da compra recebidos no formato que o Stripe exige, e criar uma sessão no Stripe para o usuário. Exemplo de uso: **pages/checkout**.
  - **pages/api/getCategories**: Essa rota é responsável por retornar as categories dos produtos da base de dados. Exemplo de uso: **pages/index**.
  - **pages/api/getProducts**: Essa rota é responsável por retornar os produtos da base de dados. Exemplo de uso: **pages/index**.
  - **pages/api/getSession**: Essa rota é responsável por retornar uma sessão a partir do id recebido. Exemplo de uso: **utils/fetchLineProducts**.

### 📑 Demais Componentes



## 🗓️ Etapas

> Novas tarefas podem ser adicionadas!

- Task: 🗹
- Task: ☐

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.1](https://nodejs.org/en/) ou superior previamente instalados.<br>
Feito isso, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/apple-store.git

# Entre no repositório com:
> cd apple-store
```

Estando agora na raiz do projeto, crie o arquivo `.env.local`, que deve conter as seguintes variáveis de ambiente:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=idDoSeuProjetoNoSanity
SANITY_API_TOKEN=tokenDaAPIDoSeuProjetoNoSanity

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=suaChavePublicavelNoStripe
STRIPE_SECRET_KEY=suaChaveSecretaNoStripe

GOOGLE_CLIENT_ID=seuIdGoogleCloud
GOOGLE_CLIENT_SECRET=suaChaveSecretaGoogleCloud
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=suaChaveSecreta
```

Tendo as variáveis de ambiente configuradas:

```bash
# Instale as dependências com:
> npm install
> cd apple-store-database
> npm install

# Execute o projeto com:
> cd ..
> npm run dev

# Feito isso, você já poderá estar acessando o projeto em: http://localhost:3000
```

## 🤝 Contato dos Contribuintes

<table border="2">
  <tr>
    <td align="center">
      <details>
        <summary>
          <b><a href="https://cursos.alura.com.br/vitrinedev/lucasmacielf">Vitrine.Dev</a> 🪟</b>
          <table>
            <tr>
              <td align="center">
                <a href="https://github.com/Luk4x">
                  <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/>
                </a>
                <br>
                <a href="https://www.linkedin.com/in/lucasmacielf/">
                  <sub>
                    <b>Lucas Maciel</b>
                  </sub>
                </a>
              </td>
            </tr>
          </table>
        </summary>

| :placard: Vitrine.Dev | Lucas Maciel |
| -------------  | --- |
| :sparkles: Nome        | **🛍️ Apple Store**
| :label: Tecnologias | nextjs, typescript, redux, stripe, reactjs, tailwind css, sanity.io, next-auth, headlessui, react hot toast, random string, react currency formatter, react responsive, react use scroll position, react icons, javascript, css, html
| :camera: Img         | <img src="https://user-images.githubusercontent.com/86276393/212569133-c845f016-df7f-41ee-a3a1-43bbbc2a6669.png#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#%EF%B8%8F-apple-store-project">Voltar ao Topo</a>
</p>

<!--
  add vitrinedev and portfolio-project tag
  Change Repo/Settings/Social Preview
-->
