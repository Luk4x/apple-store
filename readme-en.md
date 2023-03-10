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
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-steps">Steps</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pages-and-routes">Pages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-other-components">Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/212575676-5bdf0e59-e2d9-41e8-9019-a62f8aba4b91.mp4" />
</div>

> **If the video has any errors, reload the page!**<br>
> Access the project online **[HERE](https://luk4x-apple-store.vercel.app)**

## 🚀 Technologies Used

> Below are the 18 technologies used in the development of the project, and their reasons

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
          <summary>Reason</summary>
          <br/>
          <i>Because it contains several resources that help in development, performance optimizations and the like, such as the SSR used to fetch data in the application, thus also improving SEO, in addition to easily enabling the creation of routes through the Routes API.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>Because it works very well with Next and is a Javascript superset, bringing features and good practices that give a lot of security during development and confidence in the result, such as its static typing and error checking.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>To centralize and standardize the states and purchase logic of the application, in addition to being extremely flexible and debuggable.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>By streamlining and standardizing the development of application styles, bringing several resources to better deal with CSS.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>It's the base framework of the project, Next exists from it.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>As it is a reputable payment processing platform, it is used to simulate the payment of purchases.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>For user authentication by your Google account.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>Because it is a simple database to deal with and highly customizable.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>Because it has extremely useful and well-structured components, in addition to integrating very well with Tailwind.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>For helping to treat the application's responsiveness in a different, but necessary, way than Tailwind.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>Because it has highly customizable, well-structured, and simple-to-use notifications.</i>
        </details>
      </h6>
    </td>
   <td align="center">
      <a href="https://kingsora.github.io/OverlayScrollbars/">
        <img src="https://user-images.githubusercontent.com/86276393/216752819-fcf9f694-9e69-476b-b22a-0930d1b175cd.png" height="65px" alt="overlayscrollbars icon"/><br>
        <sub>
          <b>
            <pre>Overlayscroll<br/>React</pre>
          </b>
        </sub>
      </a>
     <h6>
        <details>
          <summary>Reason</summary>
          <br/>
          <i>To perform scroll styling and viewport manipulation.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://vercel.com/docs/concepts/analytics/audiences/quickstart">
        <img src="https://user-images.githubusercontent.com/86276393/216752968-b268a1a8-f0ca-463f-812e-a58dad96ee43.png" height="65px" alt="vercel icon"/><br>
        <sub>
          <b>
            <pre>Vercel<br/>Analytics</pre>
          </b>
        </sub>
      </a>
     <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>To track website views.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>Because it contains a vast library of icons.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>To generate the <code>pages/success</code> tracking number.</i>
        </details>
      </h6>
    </td>
  </tr>
  <tr>
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
          <summary>Reason</summary>
          <br/>
          <i>It's the base of Typescript.</i>
        </details>
      </h6>
    </td>
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
          <summary>Reason</summary>
          <br/>
          <i>It's implied in Tailwind.</i>
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
          <summary>Reason</summary>
          <br/>
          <i>It's implicit in the <code>TSX</code> syntax.</i>
        </details>
      </h6>
    </td>
  </tr>
</table>

## 🗓️ Steps

> 46 of the current 54 steps have already been completed, but new ones could be added!

<table align="center" height="548px">
  <tr>
    <td>
      🗹
    </td>
    <td>
      Definition of the base structure and installation of dependencies
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
       Definition of global styles
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Search for good showcase photos
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Development of <code>pages/index</code> base
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Database creation and basic configuration with <b>Sanity</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>components/Header</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Development of <code>components/Button</code> inspired by <a href="https://devdojo.com/tailwindcss/buttons">DevDojo</a>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Finalizing the structure and style of <code>pages/index</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Database administration panel configuration
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Completion of the database
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Development of <code>pages/api/getCategories</code> and <code>pages/api/getProducts</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Development of <code>utils/fetchCategories</code> and <code>utils/fetchProducts</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>components/Product</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Search for products in the database via <b>SSR</b>
      <img align="right" src="https://user-images.githubusercontent.com/86276393/213449768-416cc5b4-e3a7-4774-85b8-9a58cb1f8ae6.png" alt="arrow icon" />
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <b>Redux</b> implementation
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
        Notifications implementation 
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>components/Cart</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/checkout</code> structure and style development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>components/CheckoutProduct</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Grouping of duplicate products in <code>pages/checkout</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <b>Stripe</b> implementation
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>utils/get-stripejs</code> and <code>utils/api-helpers</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/api/checkout_sessions</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/success</code> structure and style development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/api/getSession</code> and <code>utils/fetchLineProducts</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Finalization of <code>pages/success</code> getting the data via <code>SSR</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <b>NextAuth</b> implementation and <code>pages/api/auth/[...nextauth]</code> creation
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <b>Google Cloud</b> project creation
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementation of <b>NextAuth</b> in <b>Sanity</b>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Database deployment
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
       Project images optimization
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Moving from <a href="https://heroicons.com/">Hero Icons</a> to <a href="https://react-icons.github.io/react-icons/">React Icons </a>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/index</code> design and responsiveness improvement
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/checkout</code> responsiveness improvement
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      License creation and project README development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Project <b>SEO</b> improvement
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>react-currency-formatter</code> removal (bugging)
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>components/Currency</code> development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Project deployment in <a href="https://vercel.com">Vercel</a>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Division of Production and Development branches
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Cross-Browser development
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Scroll Styling
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <code>pages/index</code> responsiveness improvement
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      <details>
        <summary>General bug fixes</summary>
        󠁼󠁼󠁼————————————󠁼<br/>
         🗹 Fixed <code>pages/index</code> Mobile menu with new scroll<br/>
         🗹 Fixed <code>components/Cart</code> position with new scroll<br/>
         🗹 Fixed the <b>Buy</b> button in <code>pages/index</code> with the new scroll<br/>
         🗹 Fixed <code>Head</code><br/> title
         🗹 <code>pages/success</code><br/> scroll fix
         🗹 Fixed <b>validateDOMNesting</b> error in <code>pages/success</code>
         🗹 SEO fix
      </details>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Implementation of <a href="https://vercel.com/docs/concepts/analytics/audiences/quickstart">Vercel Analytics</a>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Addition of my social networks
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Error handling improvement
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Customization of Toasts
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Project performance optimization
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      <code>pages/checkout</code> zip code search development
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Storing cart products in <b>Local Storage</b>
    </td>
  </tr><tr>
    <td>
      ☐
    </td>
    <td>
      Search system development
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Pages for each product development
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Addition of new products and categories
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Apple page cloning
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Creation of partner products page consuming an API
    </td>
  </tr>
</table>

## 📝 About

> Watching the video above and/or accessing the project online will help you understand the explanation!

<img align="right" src="https://user-images.githubusercontent.com/86276393/212980660-edc0babb-f014-439f-b823-4a4e9ece7d45.png" alt="notepad icon" />
In summary, the application consists of an Apple E-Commerce, simulating a complete purchase flow, where the user can or cannot authenticate himself through his Google account through <b>NextAuth</b>, add and remove products from his cart with the help of <b>Redux</b>, simulate payment for these products through the <b>Stripe</b> test environment, and at the end you will be redirected to a confirmation and thank you page for the purchase. This purchase flow itself involving the products searched from the <b>Sanity</b> database is the main highlight of the application, but there are other very important points that can be seen in the sections below.
<br/><br/>
I also recommend especially checking out the reasons for using <b>NextJS</b>, <b>Typescript</b>, <b>Redux</b> and <b>Tailwind</b> in the <a href ="#-technologies-used">Technologies</a> section, as my main objective with this project was to develop my autonomy with such technologies, since I am a <b>React</b> developer and they are a fundamental part of my ecosystem, being the main ones responsible for agility, reliability, performance and professionalism in general during the development of the application, due to its excellent resources.
<br/><br/>
But this is clear, without taking away the merit of the other technologies used, they all play a specified fundamental role with them, and contribute to the result of the project as a whole, and I will continue to learn and deepen myself a lot in these technologies and in what is necessary during the development of this application to put all my ideas into practice and fulfill all the tasks listed in the <a href="#%EF%B8%8F-steps">Steps</a> section, which is a section that is also worth checking out to get an overview of the project's evolution.

### 📄 Pages and Routes

#### The application has a total of 3 page components, namely:

  - `pages/index`: This is the Home of the application, where the user can monitor the LogIn/LogOut, and add products to the cart. Products are searched in the database using the concept of **SSR**;
  - `pages/checkout`: This is the purchase review page, where the user can remove products from the cart and continue with the payment, being redirected to the Stripe test environment - a payment page;
  - `pages/success`: After filling in the data and deciding the payment on the Stripe page, the user will be redirected to this page, which is the confirmation and acceptance of the purchase.
 
#### The application has a total of 5 route components, namely:

   - `pages/api/auth/[...nextauth]`: This is NextAuth's global settings file;
   - `pages/api/checkout_sessions`: This route is responsible for transforming the received purchase data into the format that Stripe requires, and creating a Stripe session for the user. _Usage example:_ `pages/checkout`;
   - `pages/api/getCategories`: This route is responsible for returning the product categories from the database. _Usage example:_ `utils/fetchCategories`;
   - `pages/api/getProducts`: This route is responsible for returning products from the database. _Usage example:_ `utils/fetchProducts`;
   - `pages/api/getSession`: This route is responsible for returning a session from the received id. _Usage example:_ `utils/fetchLineProducts`.

### 📑 Other Components

#### The application also has 17 more components, namely:

   - `pages/_app`: This component contains global application settings, such as Redux and NextAuth contexts that involve the entire application, global styles, and toast rendering;
   - `pages/_document`: Briefly, this component contains the application's **SEO** settings.

  <br/>

   - `components/Button`: This component is related to the button reused periodically during the application;
   - `components/Cart`: This component is related to the cart icon that appears when there is an item in the cart and the scroll is below 400;
   - `components/CheckoutProduct`: This component is related to the products shown in `pages/checkout`;
   - `components/Currency`: This component is responsible for formatting prices currency;
   - `components/Header`: This component is relative to the application header;
   - `components/Product`: This component is related to the products shown in `pages/index`.

  <br/>

  - `redux/cartSlice`: Using Redux, this component contains the logic used to handle user interaction actions in relation to the shopping system. It exports extremely important functions, such as `addToCart` and `removeFromCart` (which are self-explanatory), and values such as `selectCartProducts` (total of products in the cart), and among others, which are used periodically by the project;
  - `redux/store`: This is the Redux settings file.

  <br/>

  - `utils/api-helpers`: The idea of this component is to streamline and reuse certain processes performed in `pages/api`, componentizing them in this component. For now, it only exports `fetchPostJSON`, responsible for speeding up POST requests;
  - `utils/fetchCategories`: This component is responsible for speeding up the search for product categories in the database;
  - `utils/fetchProducts`: This component is responsible for speeding up the search for products in the database;
  - `utils/fetchLineProducts`: This component, working together with `pages/api/getSession`, is responsible for returning products based on the sent id, and together they perform id verification and can return 404 if it is incorrect;
  - `utils/get-stripejs`: This component is responsible for initializing Stripe, using the **Sigleton Pattern** to not initialize it more than once.

<br/>

  - `sanity`: This is the sanity settings file. It also exports `urlFor`, a function that helps display images of products in the database;
  - `apple-store-database`: This is the project database, created using Sanity.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/) and [Node.js v18.12.1](https://nodejs.org/en/) or higher and previously installed.<br>
After that, in the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/apple-store.git

# Enter the repository with:
> cd apple-store
```

Now being in the root of the project, create the `.env.local` file, which should contain the following environment variables:

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

To configure such variables, you will need to create a project in [Sanity](https://www.sanity.io/), [Stripe](https://stripe.com/en-br/) and [Google Cloud]( https://cloud.google.com/), plus you'll need to fill in the database as well.<br/>
After that:

```bash
# Install dependencies with:
> npm install
> cd apple-store-database
> npm install

# Run the project with:
> npm run dev
> cd ..
> npm run dev

# Once this is done, you will be able to access the project at: http://localhost:3000
```

## 📞 Contributor Contact

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
| :label: Tecnologias | nextjs, typescript, redux, stripe, reactjs, tailwind css, sanity.io, next-auth, headlessui, react hot toast, random string, vercel analytics, react responsive, overlayScrollbars react, react icons, javascript, css, html
| :camera: Img         | <img src="https://user-images.githubusercontent.com/86276393/212569133-c845f016-df7f-41ee-a3a1-43bbbc2a6669.png#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#%EF%B8%8F-apple-store-project">Back to Top</a>
</p>

<!--
  keep tecnology, phase numbers and vitrinedev techs updated
  add vitrinedev and portfolio-project tag
  Change Repo/Settings/Social Preview
-->
