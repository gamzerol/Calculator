import React, { useState } from "react";

import Buttons from "./buttons";
import Output from "./output";
import "./style.css";

const Calculator = () => {
  const [output, setOutput] = useState("");
  const [calc, setCalc] = useState("");
  const [isResultShow, setIsResultShow] = useState(false);
  const ops = ["/", "*", "+", "-", "."];

  const handleCalculation = (e) => {
    setIsResultShow(false);
    document.querySelector('.output span').style.visibility = 'visible';
    if (
      (ops.includes(e.target.value) && calc === "") ||
      (ops.includes(e.target.value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + e.target.value);
    if (!ops.includes(e.target.value)) {
      setOutput(eval(calc + e.target.value).toString());
    }
  };

  const handleReset = () => {
    setCalc("");
    setOutput(0);
    setIsResultShow(false);
  };
  const handleResult = () => {
    setIsResultShow(true);
    document.querySelector('.output span').style.visibility = 'hidden';
  };

  return (
    <React.Fragment>
      <div className="title">CALCULATOR</div>
      <div className="calculator">
        {isResultShow ? (
          <Output result={output} />
        ) : (
          <Output result={calc || 0} calcOutput={output || 0} />
        )}

        <Buttons
          updateCalc={handleCalculation}
          reset={handleReset}
          showResult={handleResult}
        />
      </div>
    </React.Fragment>
  );
};

export default Calculator;
