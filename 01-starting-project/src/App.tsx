import componentsImage from "./assets/react-core-concepts.png";
import jsxImage from "./assets/react-jsx.png";
import propsImage from "./assets/react-props.png";
import { CoreConceptProps, CORE_CONCEPTS } from "./data";


function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>Fundamental React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

function CoreConcept(props: CoreConceptProps) {
    return <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>;
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
