const TrailForm = (props) => {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="trail-wrap">
          <label htmlFor="name">name</label>
          <input
              onChange={handleChange}
              name="name"
              type="name"
              placeholder="Name of Trail"
              value={formValues.name}
              required
          />
            <label htmlFor="img">Image</label>
            <input
              onChange={handleChange}
              type="image"
              name="image"
              value={formValues.image}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Submit
          </button>
        </form>
    </div>
  )
}