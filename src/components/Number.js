function Number(props){

    const res = props.parenthesisNeeded ? `(${props.number})` : props.number;

    return (
        <div className="number">
            <p>{res}</p>
        </div>
    );
}

export default Number;
