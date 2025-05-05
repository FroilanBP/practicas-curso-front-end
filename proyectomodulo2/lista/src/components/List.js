import React, { useState, useEffect } from 'react';
import Item from './Item';
import Add from './Add';

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const Add = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Tareas / To do List</h1>
      <Add onAdd={Add} />
      <div style={styles.listContainer}>
        {todos.map(todo => (
          <Item 
            key={todo.id} 
            todo={todo} 
            onDelete={deleteTodo}
            onToggle={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#5c0067',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '24px'
  },
  listContainer: {
    marginTop: '16px'
  }
};

export default TodoList;