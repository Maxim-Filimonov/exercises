import React from "react";
import "./Step3.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.courseName = React.createRef();
    this.courseDesc = React.createRef();
    this.courseType = React.createRef();
    this.courseLogo = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(
      this.courseName.current.value,
      this.courseDesc.current.value,
      this.courseType.current.value,
      this.courseLogo.current.files[0].name
    );
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <fieldset>
          <legend>Форма для создания курса</legend>
          <div className="field">
            <label htmlFor="courseName">Название курса</label>
            <input ref={this.courseName} id="courseName" type="text"></input>
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
