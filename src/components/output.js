
const Output = (props) => {

    return(
        <div className="output">
            <span>({props.calcOutput})</span>{props.result}
        </div>
    )
}

export default Output;