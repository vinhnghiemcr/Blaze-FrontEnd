const Trail = ({trail}) => {

  return (
      <div className="trailMap">
          <h2>{trail.name}</h2>
          <img className="trailImg" src={trail.img} alt={trail.name}/>
          <h4>{trail.description}</h4>
      </div>
  )
}

export default Trail