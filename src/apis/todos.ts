export const getTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());
