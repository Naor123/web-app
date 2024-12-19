function Dice(props){
    const buttonStyle = {
        backgroundColor: props.state ? "#59e391" : "white" 
    }
    return(
            <button style={buttonStyle}onClick={()=> props.changeState(props.id)}>{props.num}</button>
    )
}

export default Dice