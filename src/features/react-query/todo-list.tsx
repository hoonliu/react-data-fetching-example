import { useQuery } from 'react-query';
import { getTodos } from '../../apis/todos';
import type { Todo } from '../../types';

const TodoList = () => {
  const query = useQuery('todos', getTodos);

  return (
    <table className='table table-compact'>
      <thead>
        <tr>
          <th>NO.</th>
          <th>Completed</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {query.data.map((todo: Todo, index: number) => (
          <tr key={todo.id}>
            <th>{index + 1}</th>
            <td>{todo.completed ? '✔' : '❌'}</td>
            <td>{todo.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
