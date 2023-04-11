import { Container, GlobalStyles } from "./GlobalStyles"
import { GlobalContext } from './context/GlobalContext'
import {Router} from './routes/Routes'


function App() {



  const context = {};

  return (
    <>
      <GlobalStyles />
      <Container>
        <GlobalContext.Provider value={context} >
          <Router />
        </GlobalContext.Provider>
      </Container>
    </>
  )
}

export default App
