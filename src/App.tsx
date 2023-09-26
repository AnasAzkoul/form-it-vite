import Sidebar from './components/sidebar';
import DroppableBox from './components/droppable-box';

function App() {
  return (
    <main className='grid min-h-screen grid-cols-12 bg-background'>
      <Sidebar />
      <DroppableBox />
    </main>
  );
}

export default App;
