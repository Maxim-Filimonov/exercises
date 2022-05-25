import React from "react";
import "./Step3.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { courseName: "" };
    this.courseDesc = React.createRef();
    this.courseType = React.createRef();
    this.courseLogo = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(
      this.state.courseName,
      this.courseDesc.current.value,
      this.courseType.current.value,
      this.courseLogo.current.files[0]?.name
    );
  }

  handleChange(e) {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    let errors = [];
    if (this.state.courseName.length > 10) {
      errors.push("Название курса должно быть не больше 10 символов");
    }
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <fieldset>
          <legend>Форма для создания курса</legend>
          <div className="errors">
            {errors.map((err, index) => (
              <span key={index} className="error">
                {err}
              </span>
            ))}
          </div>
          <div className="field">
            <label htmlFor="courseName">Название курса</label>
            <input
              value={this.state.courseName}
              onChange={(e) => this.handleChange(e)}
              id="courseName"
              type="text"
            ></input>
          </div>
          <div className="field">
            <label htmlFor="courseDescription">Описание курса</label>
            <textarea ref={this.courseDesc} id="courseDescription" />
          </div>
          <div className="field">
            <label htmlFor="courseType">Тип курса</label>
            <select ref={this.courseType}>
              <option value="online">Онлайн</option>
              <option value="offline">Оффлайн</option>
              <option value="hybrid">Гибрид</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="courseLogo">Логотип</label>
            <input type="file" ref={this.courseLogo} />
          </div>
        </fieldset>
        <input type="submit" value="Сохранить" />
      </form>
    );
  }
}

export default App;
