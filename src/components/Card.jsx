const Card = ({desc, isCompleted, handleClick, idx}) => {
  if (isCompleted === true) {
    return (
      <button 
      className="card border-primary w-10 h-5 p-2"
      onClick={() => handleClick(idx)}
      >
        <div className="card-body">
          <h4 className="card-title"><del>{desc}</del></h4>
        </div>
      </button>
    )
  } else {
    return (
      <button 
      className="card border-primary w-10 h-5 p-2"
      onClick={() => handleClick(idx)}
      >
        <div className="card-body">
          <h4 className="card-title">{desc}</h4>
        </div>
      </button>
    )
  }
}
export default Card;