
const State = ({state}) => {

    return (
        <div className="stateMap">
            <h2>{state.name}</h2>
            <img className="stateImg" src={state.img} alt={state.name}/>
            <h4>{state.description}</h4>
        </div>
    )
}

export default State