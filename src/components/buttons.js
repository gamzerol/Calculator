const Buttons = (props) => {
  return (
    <div className="button-wrapper">
      <div className="button-wrapper__left">
        <div className="button-group">
          <button className="number-btn" onClick={props.updateCalc} value="7">
            7
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="8">
            8
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="9">
            9
          </button>
        </div>
        <div className="button-group">
          <button className="number-btn" onClick={props.updateCalc} value="4">
            4
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="5">
            5
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="6">
            6
          </button>
        </div>
        <div className="button-group">
          <button className="number-btn" onClick={props.updateCalc} value="1">
            1
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="2">
            2
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="3">
            3
          </button>
        </div>
        <div className="button-group">
          <button className="reset-btn" value="AC" onClick={props.reset}>
            AC
          </button>
          <button className="number-btn" onClick={props.updateCalc} value="0">
            0
          </button>
          <button className="result-btn" value="=" onClick={props.showResult}>
            =
          </button>
        </div>
      </div>
      <div className="button-wrapper__right">
        <button className="divide-btn" onClick={props.updateCalc} value="/">
          /
        </button>
        <button
          className="multiple-btn"
          onClick={props.updateCalc}
          value="*"
        >
          X
        </button>
        <button
          className="subtract-btn"
          onClick={props.updateCalc}
          value="-"
        >
          -
        </button>
        <button className="add-btn" onClick={props.updateCalc} value="+">
          +
        </button>
      </div>
    </div>
  );
};

export default Buttons;
