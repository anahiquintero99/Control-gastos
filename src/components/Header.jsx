import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  setIsValidatePresupuesto,
  isValidatePresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidatePresupuesto ? (
        <p>Control Presupuesto</p>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidatePresupuesto={setIsValidatePresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
