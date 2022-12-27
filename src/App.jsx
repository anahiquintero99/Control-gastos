import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidatePresupuesto, setIsValidatePresupuesto] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidatePresupuesto={isValidatePresupuesto}
        setIsValidatePresupuesto={setIsValidatePresupuesto}
      />
    </div>
  );
}
export default App;
