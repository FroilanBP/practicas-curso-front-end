import React from 'react';

const Item = ({ todo, onDelete, onToggle }) => {
  return (
    <div style={{
      ...styles.item,
      backgroundColor: todo.completed ? '#f8f9fa' : '#ffffff'
    }}>
      <div style={styles.content}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          style={styles.checkbox}
        />
        <span style={{
          ...styles.text,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#6c757d' : '#212529'
        }}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        style={styles.deleteButton}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    marginBottom: '8px',
    borderRadius: '4px',
    transition: 'all 0.2s ease'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  checkbox: {
    marginRight: '12px',
    width: '16px',
    height: '16px'
  },
  text: {
    fontSize: '16px',
    flex: 1
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    color: '#dc3545',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Item;