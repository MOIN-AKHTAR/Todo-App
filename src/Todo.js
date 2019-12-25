import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      Todo: [
        {
          id: 1,
          todo: "Complete Home Work",
          completed: false
        },
        {
          id: 2,
          todo: "Take Out The Trash",
          completed: true
        },
        {
          id: 3,
          todo: "Go To Gym",
          completed: false
        },
        {
          id: 4,
          todo: "Play Game",
          completed: true
        },
        {
          id: 5,
          todo: "Eat Food",
          completed: false
        }
      ]
    };
  }
  // Change The Status Of Task Whether Completed Or Incompleted
  Iscomplete = id => {
    const Todo = this.state.Todo.find(task => task.id === id);
    Todo.completed = !Todo.completed;
    this.setState({
      Todo: this.state.Todo
    });
  };
  // Render Function
  render() {
    const Style = {
      fontStyle: "italic",
      color: "gray",
      textDecoration: "lineThrough"
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0px"
        }}
      >
        <h1
          style={{
            color: "darkBlue"
          }}
        >
          Our Todo App
        </h1>
        {this.state.Todo.map(Task => (
          <div
            key={Task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid black",
              margin: "10px 0px",
              width: "250px"
            }}
          >
            <input
              type="checkbox"
              checked={Task.completed}
              onChange={() => this.Iscomplete(Task.id)}
            />
            <p style={Task.completed ? Style : null}>{Task.todo}</p>
          </div>
        ))}
      </div>
    );
  }
}
