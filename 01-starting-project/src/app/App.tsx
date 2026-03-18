import { Header, CoreConcept, TabButton } from "@/components";
import { CORE_CONCEPTS } from "@/features/concepts";

export function App() {
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>
              Components
            </TabButton>
            <TabButton>
              JSX
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}
