
const State = ({state}) => {

    return (
        <div className="stateMap">
            <h2 className="stateName">{state.name}</h2>
            <img className="stateImg" src={state.img} alt={state.name}/>
        </div>
    )
}

export default State