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
  <a href="#%EF%B8%8F-etapas">Etapas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-páginas-e-rotas">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
> Acesse o projeto online **[AQUI](https://luk4x-apple-store.vercel.app)**

## 🚀 Tecnologias Utilizadas

> Abaixo estão as 18 tecnologias utilizadas no desenvolvimento do projeto, e seus motivos

<table align="center">
  <tr>
    <td align="center">
      <a href="https://nextjs.org/">
        <img src="https://skillicons.dev/icons?i=nextjs" width="65px" alt="NextJS icon"/><br>
        <sub>
          <b>
            <pre>NextJS</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por conter diversos recursos que auxiliam no desenvolvimento, otimizações de performance e afins, como o SSR usado para buscar os dados na aplicação, assim melhorando também o SEO, além possibilitar facilmente a criação das rotas através do API Routes.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://www.typescriptlang.org/">
        <img src="https://skillicons.dev/icons?i=ts" width="65px" alt="Typescript icon"/><br>
        <sub>
          <b>
            <pre>Typescript</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por trabalhar muito bem com o Next e ser um superset do Javascript, trazendo recursos e boas práticas que dão muita segurança durante o desenvolvimento e confiança no resultado, como sua tipagem estática e checagem de erros.</i>
        </details>
      </h6>
    </td>
    <td align="center">
    <a href="https://redux.js.org/">
        <img src="https://skillicons.dev/icons?i=redux" width="65px" alt="Redux icon"/><br>
        <sub>
          <b>
            <pre>Redux<br/>Toolkit</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Para centralizar e padronizar os estados e a lógica de compra da aplicação, além de ser extremamente flexível e depurável.</i>
        </details>
      </h6>
    </td>
    <td align="center">
    <a href="https://tailwindcss.com/">
        <img src="https://skillicons.dev/icons?i=tailwind" width="65px" alt="Tailwind icon"/><br>
        <sub>
          <b>
            <pre>Tailwind</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por agilizar e padronizar o desenvolvimento dos estilos da aplicação, trazendo vários recursos para se lidar melhor com o CSS.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://pt-br.reactjs.org/">
        <img src="https://skillicons.dev/icons?i=react" width="65px" alt="React icon"/><br>
        <sub>
          <b>
            <pre>ReactJS</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Ele é o framework base do projeto, o Next existe a partir dele.</i>
        </details>
      </h6>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://stripe.com/en-br/">
        <img src="https://user-images.githubusercontent.com/86276393/212921259-b6b0f80e-d9ed-4b0e-b17a-34733b507cec.png" width="65px" alt="Stripe icon"/><br>
        <sub>
          <b>
            <pre>Stripe</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por ser uma conceituada plataforma de processamento de pagamentos, sendo utilizada para simular o pagamento das compras.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://next-auth.js.org/">
        <img src="https://user-images.githubusercontent.com/86276393/212922355-e38adb95-9e96-4970-b934-e8ac6c9bd3c9.png" width="60px" alt="NextAuth icon"/><br>
        <sub>
          <b>
            <pre>NextAuth</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Para a autenticação do usuário pela sua conta Google.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://www.sanity.io/">
        <img src="https://user-images.githubusercontent.com/86276393/212923447-c70352c9-540b-4063-8279-880ad2c164e2.png" height="65px" alt="Sanity icon"/><br>
        <sub>
          <b>
            <pre>Sanity.io</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por ser uma base de dados simples de se lidar e altamente customizável.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://headlessui.com/">
        <img src="https://user-images.githubusercontent.com/86276393/212924197-eb12c9c9-3803-4470-897a-bdf8f9976f97.png" height="65px" alt="HeadlessUI icon"/><br>
        <sub>
          <b>
            <pre>HeadlessUI</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por dispor de componentes extremamente úteis e bem estruturados, além de se integrar muito bem com Tailwind.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://www.npmjs.com/package/react-responsive/">
        <img src="https://user-images.githubusercontent.com/86276393/212925340-d173a3be-d947-4620-b6e6-734d1fdf8fd0.png" height="65px" alt="npm icon"/><br>
        <sub>
          <b>
            <pre>React<br/>Responsive</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por auxiliar no tratamento da responsividade da aplicação de uma forma diferente, porém necessária, do Tailwind.</i>
        </details>
      </h6>
    </td>
  </tr>
  <tr>
   <td align="center">
      <a href="https://react-hot-toast.com/">
        <img src="https://user-images.githubusercontent.com/86276393/212926924-2b88be96-9c4d-40ed-8459-0485a5e9ecfb.png" height="65px" alt="React Hot Toast icon"/><br>
        <sub>
          <b>
            <pre>React Hot<br/>Toast</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por dispor de notificações altamente customizáveis, bem estruturadas, e simples de se lidar.</i>
        </details>
      </h6>
    </td>
   <td align="center">
      <a href="https://www.npmjs.com/package/react-use-scroll-position/">
        <img src="https://user-images.githubusercontent.com/86276393/212925340-d173a3be-d947-4620-b6e6-734d1fdf8fd0.png" height="65px" alt="npm icon"/><br>
        <sub>
          <b>
            <pre>React use<br/>Scroll Position</pre>
          </b>
        </sub>
      </a>
     <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Para fornecer a informação de qual parte da página o usuário está visualizando, e auxiliar na responsividade a partir dela.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://react-icons.github.io/react-icons/">
        <img src="https://user-images.githubusercontent.com/86276393/212928845-43fc02b7-bedb-4fb3-aed4-411a8e892920.png" height="65px" alt="React Icons icon"/><br>
        <sub>
          <b>
            <pre>React Icons</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Por conter uma vasta biblioteca de ícones.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://www.npmjs.com/package/random-string/">
        <img src="https://user-images.githubusercontent.com/86276393/212925340-d173a3be-d947-4620-b6e6-734d1fdf8fd0.png" height="65px" alt="npm icon"/><br>
        <sub>
          <b>
            <pre>Random String</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Para gerar o número de rastreamento da <code>pages/success</code>.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
        <img src="https://skillicons.dev/icons?i=js" width="65px" alt="Javascript icon"/><br>
        <sub>
          <b>
            <pre>Javascript</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Ele é a base do Typescript.</i>
        </details>
      </h6>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/">
        <img src="https://skillicons.dev/icons?i=css" width="65px" alt="CSS3 icon"/><br>
        <sub>
          <b>
            <pre>CSS3</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Fica implícito no Tailwind.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
        <img src="https://skillicons.dev/icons?i=html" width="65px" alt="HTML5 icon"/><br>
        <sub>
          <b>
            <pre>HTML5</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Fica implícito na sintaxe de <code>TSX</code>.</i>
        </details>
      </h6>
    </td>
  </tr>
</table>

## 🗓️ Etapas

> 39 das atuais 50 etapas já foram concluídas, mas novas podem ser adicionadas!

<table align="center" height="548px">
  <tr>
    <td>
      🗹
    </td>
    <td>
      Definição da estrutura base e instalação de dependências
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
       Definição de estilos globais
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Busca por boas fotos de mostruário
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da base da <code>pages/index</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação e configuração básica da base de dados com o <b>Sanity</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/Header</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/Button</code> inspirado no <a href="https://devdojo.com/tailwindcss/buttons">DevDojo</a>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Finalização da estrutura e estilo da <code>pages/index</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Configuração do painel de administração da base de dados
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Preenchimento da base de dados
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da <code>pages/api/getCategories</code> e <code>pages/api/getProducts</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da <code>utils/fetchCategories</code> e <code>utils/fetchProducts</code> 
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/Product</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Busca dos produtos da base de dados via <b>SSR</b>
      <img align="right" src="https://user-images.githubusercontent.com/86276393/213449768-416cc5b4-e3a7-4774-85b8-9a58cb1f8ae6.png" alt="arrow icon" />
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementação do <b>Redux</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementação dos toasts
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/Cart</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da estrutura e estilo da <code>pages/checkout</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/CheckoutProduct</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Agrupamento dos produtos duplicados na <code>pages/checkout</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementação do <b>Stripe</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>utils/get-stripejs</code> e <code>utils/api-helpers</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da <code>pages/api/checkout_sessions</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da estrutura e estilo da <code>pages/success</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da <code>pages/api/getSession</code> e <code>utils/fetchLineProducts</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Finalização da <code>pages/success</code> obtendo os dados via <code>SSR</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementação do <b>NextAuth</b> e criação do <code>pages/api/auth/[...nextauth]</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação do projeto na <b>Google Cloud</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementação do <b>NextAuth</b> no <b>Sanity</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Deploy da base de dados
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Otimização das imagens do projeto
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Mudança do <a href="https://heroicons.com/">Hero Icons</a> para o <a href="https://react-icons.github.io/react-icons/">React Icons</a>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Melhoria do design e responsividade da <code>pages/index</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Melhoria da responsividade da <code>pages/checkout</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação da licença e desenvolvimento do README do projeto <!-- e README-en -->
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Melhoria do <b>SEO</b> do projeto
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Remoção do <code>react-currency-formatter</code> (bugging)
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/Currency</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Deploy do projeto na <a href="https://vercel.com">Vercel</a>
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Divisão de branches de Produção e Desenvolvimento
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Desenvolvimento Cross-Browser <!-- e estilização do scroll -->
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Melhoria do tratamento de erros
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Otimização da performance do projeto <!-- https://www.linkedin.com/posts/dev-luiz-carlos_frontend-desenvolvedores-html-activity-7019619056190173185-B56Z?utm_source=share&utm_medium=member_desktop, nextfont --> 
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Desenvolvimento da busca de CEP na <code>pages/checkout</code> <!-- cosume cep api + headlessui combobox --> 
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Armazenamento os produtos do carrinho em <b>Local Storage</b>
    </td>
  </tr><tr>
    <td>
      ☐
    </td>
    <td>
      Desenvolvimento do sistema de busca <!-- header search icon -->
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Desenvolvimento da página para cada produto
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Adição de novos produtos e categorias <!-- airpods, tv?, acessórios? -->
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Clonagem de páginas da Apple <!-- explore => loja, suporte, só na apple => só na apple + apple tv 4k + apple tv+ -->
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Criação de página de produtos parceiros consumindo uma API
    </td>
  </tr>
  
  <!-- suggest user account data in payment -->
  <!-- migrate from tailwind to styled-components if/when necessary -->
</table>

## 📝 Sobre

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!

<img align="right" src="https://user-images.githubusercontent.com/86276393/212980660-edc0babb-f014-439f-b823-4a4e9ece7d45.png" alt="notepad icon" />
Em resumo, a aplicação se consiste num E-Commerce da Apple, simulando um fluxo de compra completo, onde o usuário pode ou não se autenticar através de sua conta Google, adicionar e remover produtos do seu carrinho, simular o pagamento desses produtos através do ambiente de testes do Stripe, e ao final será redirecionado para uma página de confirmação e agradecimento da compra.
Esse fluxo de compra em sí é o principal destaque da aplicação, mas existem outros pontos importantes que podem ser conferidos nas sessões abaixo.
<br/><br/>
Também recomendo conferir especialmente os motivos da utilização de <b>NextJS</b>, <b>Typescript</b>, <b>Redux</b> e <b>Tailwind</b> na sessão de <a href="#-tecnologias-utilizadas">Tecnologias</a>, pois meu principal objetivo com esse projeto foi desenvolver minha autonomia com tais tecnologias, visto que sou um desenvolvedor <b>React</b> e elas são uma parte fundamental de seu ecossistema, sendo elas as principais responsáveis pela agilidade, confiança, performance e profissionalismo de forma geral durante o desenvolvimento da aplicação, devido aos seus excelentes recursos.<br/>
Mas isso claro, sem tirar o mérito das outras tecnologias utilizadas, todas elas desempenham um papel fundamental especificado junto delas, e contribuem para o resultado do projeto como um todo, e irei continuar aprendendo e me aprofundando bastante nessas tecnologias e no que for necessário durante o desenvolvimento dessa aplicação para colocar todas as minhas ideias em prática e cumprir todas as tarefas listadas na sessão de <a href="#%EF%B8%8F-etapas">Etapas</a>, que é uma sessão que também vale a pena conferir para ter uma visão geral sobre a evolução do projeto.

### 📄 Páginas e Rotas

#### A aplicação tem um total de 3 componentes de página, sendo eles:

  - `pages/index`: Essa é a Home da aplicação, onde o usuário pode efetuar o LogIn/LogOut, e adicionar produtos ao carrinho. Os produtos são buscados da base de dados utilizando o conceito de **SSR**;
  - `pages/checkout`: Essa é a página de revisão da compra, onde o usuário pode remover produtos do carrinho e seguir com o pagamento, sendo redirecionado para o ambiente de teste do Stripe - uma página de pagamento;
  - `pages/success`: Após ter preenchido os dados e efetuado o pagamento na página do Stripe, o usuário será redirecionado para essa página, que é a de confirmação e agradecimento pela compra.
 
#### A aplicação tem um total de 5 componentes de rota, sendo eles:

  - `pages/api/auth/[...nextauth]`: Esse é o arquivo de configurações globais do NextAuth;
  - `pages/api/checkout_sessions`: Essa rota é responsável por transformar os dados da compra recebidos no formato que o Stripe exige, e criar uma sessão no Stripe para o usuário. _Exemplo de uso:_ `pages/checkout`;
  - `pages/api/getCategories`: Essa rota é responsável por retornar as categorias dos produtos da base de dados. _Exemplo de uso:_ `utils/fetchCategories`;
  - `pages/api/getProducts`: Essa rota é responsável por retornar os produtos da base de dados. _Exemplo de uso:_ `utils/fetchProducts`;
  - `pages/api/getSession`: Essa rota é responsável por retornar uma sessão a partir do id recebido. _Exemplo de uso:_ `utils/fetchLineProducts`.

### 📑 Demais Componentes

#### A aplicação também conta com mais 17 componentes, sendo eles:

  - `pages/_app`: Nesse componente ficam configurações globais da aplicação, como os contextos do Redux e do NextAuth que envolvem toda a aplicação, estilos globais, e a renderização dos toasts;
  - `pages/_document`: Resumidamente, nesse componente ficam as configurações de **SEO** da aplicação.

  <br/>

  - `components/Button`: Esse componente é relativo ao botão reaproveitado periodicamente durante a aplicação;
  - `components/Cart`: Esse componente é relativo ao ícone de carrinho que aparece quando existe algum item no carrinho e o scroll está baixo de 400;
  - `components/CheckoutProduct`: Esse componente é relativo aos produtos mostrados na `pages/checkout`;
  - `components/Currency`: Esse componente é responsável pela formatação de moeda dos preços;
  - `components/Header`: Esse componente é relativo ao cabeçalho da aplicação;
  - `components/Product`: Esse componente é relativo aos produtos mostrados no `pages/index`.

  <br/>

  - `redux/cartSlice`: Utilizando o Redux, nesse componente está a lógica usada para lidar com as ações de interação do usuário em relação ao sistema de shopping. Ele exporta funções de extrema importância, como `addToCart` e `removeFromCart` (que são autoexplicativas), e valores como `selectCartProducts` (total de produtos no carrinho), e dentre outros, que são usados periodicamente pelo projeto;
  - `redux/store`: Esse é o arquivo de configurações do Redux.

  <br/>

  - `utils/api-helpers`: A ideia desse componente é a de agilizar e reutilizar determinados processos feitos na `pages/api`, componentizando-os nesse componente. Por enquanto ele exporta apenas a `fetchPostJSON`, responsável por agilizar requisições POST;
  - `utils/fetchCategories`: Esse componente responsável por agilizar a busca pelas categorias dos produtos na base de dados;
  - `utils/fetchProducts`: Esse componente responsável por agilizar a busca pelos produtos na base de dados;
  - `utils/fetchLineProducts`: Esse componente, trabalhando em conjunto com a `pages/api/getSession`, é responsável por retornar os produtos baseado no id enviado, e juntos eles realizam a verificação do id e podem retornar 404 caso esteja incorreto;
  - `utils/get-stripejs`: Esse componente é responsável por inicializar o Stripe, usando o **Sigleton Pattern** para não inicializá-lo mais de uma vez.

<br/>

  - `sanity`: Esse é o arquivo de configurações do Sanity. Ele também exporta a `urlFor`, função que auxilia na exibição das imagens dos produtos da base de dados;
  - `apple-store-database`: Essa é a base de dados do projeto, criada utilizando o Sanity.

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
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

Para configurar tais variáveis, você precisará criar um projeto no [Sanity](https://www.sanity.io/), [Stripe](https://stripe.com/en-br/) e [Google Cloud](https://cloud.google.com/), além de que precisará preencher a base de dados também.<br/>
Feito isso:

```bash
# Instale as dependências com:
> npm install
> cd apple-store-database
> npm install

# Execute o projeto com:
> npm run dev
> cd ..
> npm run dev

# Feito isso, você já poderá estar acessando o projeto em: http://localhost:3000
```

## 📞 Contato dos Contribuintes

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
                    <img width="12px" src="https://user-images.githubusercontent.com/86276393/213034697-3d2b2048-7a83-435c-96aa-6e5fad0466eb.png" /> <b>Lucas Maciel</b>
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
  keep tecnology and phase numbers updated
  add vitrinedev and portfolio-project tag
  Change Repo/Settings/Social Preview
-->
