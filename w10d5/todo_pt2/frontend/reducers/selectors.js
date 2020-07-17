import React from 'react';

export const allTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);

// For example, getAllTodos returns all the todos 
// stored in the state as an array of todo objects, 
// making it easier to iterate over and render each one.