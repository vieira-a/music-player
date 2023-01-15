import { GlobalStyle } from "./components/GlobalStyle";
import Headings from "./components/Headings/Headings";
import Controllers from "./components/Controllers/Controllers";
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

      <section>
        <Controllers />
      </section>
      
    </main>
  )
}

export default App
