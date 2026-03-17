import { Header, CoreConcept } from "@/components";
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
      </main>
    </div>
  );
}
