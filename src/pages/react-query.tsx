import { QueryClient, QueryClientProvider } from 'react-query';
import TodoList from '../features/react-query/todo-list';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const ReactQueryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Helmet>
        <title>React Query Example</title>
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <div className='container mx-auto pt-6 flex justify-center items-center min-h-screen'>
          <Suspense fallback={<h2>🌀 Loading...</h2>}>{children}</Suspense>
        </div>
      </QueryClientProvider>
    </>
  );
};
const ReactQuery = () => {
  return (
    <ReactQueryLayout>
      <TodoList />
    </ReactQueryLayout>
  );
};

export default ReactQuery;
