import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify"; // biblioteca que permite personalizar os alertas!
// quando importada, colocar autoClose indica que se o usuario nao passar o mouse em cima do alerta, ele fecha automaticamente após um tempo determinado.

import 'react-toastify/dist/ReactToastify.css'; // css da biblioteca

function App() {
  return (
    <div className='app'>
      <ToastContainer autoClose={3000}/> 
      <RoutesApp/>
    </div>
  );
}

export default App;