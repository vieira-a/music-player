import { GlobalStyle } from "./components/GlobalStyle";
import Headings from "./components/Headings/Headings";
import Cover from "./components/Cover/Cover";

function App() {

  return (
    <main>
      <GlobalStyle />
      
      <section>
        <Cover />
      </section>

      <section>
        <Headings />
      </section>
      
    </main>
  )
}

export default App
