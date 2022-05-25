import React from "react";
import "./Step3.css";

function App() {
  return (
    <form>
      <fieldset>
        <legend>Форма для создания курса</legend>
        <div className="field">
          <label for="courseName">Название курса</label>
          <input id="courseName" type="text"></input>
        </div>
        <div className="field">
          <label for="courseDescription">Описание курса</label>
          <textarea id="courseDescription" />
        </div>
        <div className="field">
          <label for="courseType">Тип курса</label>
          <select>
            <option value="online">Онлайн</option>
            <option value="offline">Оффлайн</option>
            <option value="hybrid">Гибрид</option>
          </select>
        </div>
        <div className="field">
          <label for="courseLogo">Логотип</label>
          <input type="file" />
        </div>
      </fieldset>
    </form>
  );
}

export default App;
