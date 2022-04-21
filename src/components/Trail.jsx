const Trail = ({ name, img, description }) => {

  return (
      <div className="trailMap">
          <h2>{name}</h2>
          <img className="trailImg" src={img} alt={name}/>
          <h4>{description}</h4>
      </div>
  )
}

export default Trail