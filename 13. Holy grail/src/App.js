import "./styles.css";

//.... header .....
//nav  main   sidebar
//.... footer ......

//The <header> element represents a container for introductory content or a set of navigational links.

//The <nav> tag defines a set of navigation links.
//The <main> tag specifies the main content of a document.
//The <aside> tag defines some content aside from the content it is placed in.

//The <footer> tag defines a footer for a document or section.

export default function App() {
  return (
    <>
      <header>Header</header>
      <div className="contentdiv">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>

      <footer>Footer</footer>
    </>
  );
}
