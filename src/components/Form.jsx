const Form = ({inputs, handleSubmit, handleChange}) => {
  return (
  <form className="col-6 m-2" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor={inputs.desc}>New Task: </label>
      <input className="form-control" type="text" name="desc" placeholder="Description" onChange={handleChange}/>
      <span className="text-danger">{inputs.desc.length < 20 ? "Description of the task must be at least 20 characters." : ""}</span>
    </div>
      <input type="submit" value="Submit" className="btn btn-success"/>
  </form>
  );
}
export default Form;