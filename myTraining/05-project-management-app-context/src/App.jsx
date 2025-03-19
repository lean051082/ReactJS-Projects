import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';
import ProjectManagementProvider from './store/Project-management-context';

function App() {
  return (
    <ProjectManagementProvider>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <MainArea />
      </main>
    </ProjectManagementProvider>
  );
}

export default App;
