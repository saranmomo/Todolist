import React from 'react';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th>Date</th>
          <th>Priority</th>
          <th>Task</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{new Date(todo.date).toLocaleDateString()}</td>
            <td>{todo.priority}</td>
            <td>{todo.task}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
            <td>
              <button
                onClick={() => editTodo(todo)}
                className="btn btn-warning btn-sm me-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
