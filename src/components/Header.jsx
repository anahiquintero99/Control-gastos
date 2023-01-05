import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  setIsValidatePresupuesto,
  isValidatePresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidatePresupuesto ? (
        <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} />
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
