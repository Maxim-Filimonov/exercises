import React from "react";
import coursesData from "./courses";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(coursesData);
    this.state = { courses: coursesData };
  }
  handleAddition() {
    this.setState({
      courses: ["Новый курс " + new Date(), ...this.state.courses],
    });
  }
  handleDeletion(courseId) {
    // есть несколько методов удаления элементов из списка
    // один из методов фильтрация элементов которые не подходят
    // например чтобы удалить все четные числа:
    // [1, 2, 3].filter(n => n % 2 === 0) // [1,3]
    this.setState({
      courses: this.state.courses.filter((x) => x !== courseId),
    });
  }

  render() {
    const coursesDisplay = this.state.courses.map((course) => (
      <Course
        key={course}
        title={course}
        onCourseClicked={() => this.handleDeletion(course)}
      />
    ));

    return (
      <>
        {coursesDisplay}
        <button onClick={() => this.handleAddition()}>Добавить курс</button>
      </>
    );
  }
}

function Course({ title, onCourseClicked }) {
  return <li onClick={onCourseClicked}>{title}</li>;
}

export default App;
