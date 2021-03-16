const Card = ({desc, isCompleted, handleItemClick, handleDeleteClick, idx}) => {
  if (isCompleted === true) {
    return (
      <div className="d-flex flex-column justify-content-evenly align-items-center">
        <button 
          className="card border-primary w-10 h-5 p-2"
          onClick={() => handleItemClick(idx)}
          >
            <div className="card-body">
              <h4 className="card-title"><del>{desc}</del></h4>
            </div>
        </button>
        <button className="btn btn-danger" onClick={() => handleDeleteClick(idx)}>Delete Task</button>
      </div>
    )
  } else {
    return (
      <div className="d-flex flex-column justify-content-evenly align-items-center">
        <button 
          className="card border-primary w-10 h-5 p-2"
          onClick={() => handleItemClick(idx)}
          >
            <div className="card-body">
              <h4 className="card-title">{desc}</h4>
            </div>
        </button>
        <button className="btn btn-danger" onClick={() => handleDeleteClick(idx)}>Delete Task</button>
      </div>
    )
  }
}
export default Card;