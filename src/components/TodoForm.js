import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, updateTodo, editingTodo }) => {
  const [formData, setFormData] = useState({
    id: '',
    date: '',
    priority: '',
    task: '',
    completed: false,
  });

  useEffect(() => {
    if (editingTodo) {
      setFormData(editingTodo);
    }
  }, [editingTodo]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      updateTodo({
        ...formData,
        date: new Date(formData.date).toISOString(),
      });
    } else {
      addTodo({
        ...formData,
        id: Date.now(),
        date: new Date(formData.date).toISOString(),
      });
    }
    setFormData({
      id: '',
      date: '',
      priority: '',
      task: '',
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-light">
      <div className="mb-3">
        <label className="form-label">Date of Item:</label>
        <input
          type="date"
          name="date"
          value={formData.date.slice(0, 10)}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Priority:</label>
        <input
          type="text"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Task:</label>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">Completed</label>
      </div>
      <button type="submit" className="btn btn-primary">
        {formData.id ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
