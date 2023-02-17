import ApplicationContext, {ApplicationContextProvider} from './components/ApplicationContext'
import Home from "./pages/home";

function App() {
  return (
    <ApplicationContextProvider>
       <Home />
    </ApplicationContextProvider>
  );
}

export default App;
