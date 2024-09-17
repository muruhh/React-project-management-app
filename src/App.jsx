import NoProjects from "./components/NoProjects.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <main className="h-dvh mt-8 flex gap-8">
      <Sidebar />
      <NoProjects />
    </main>
  );
}

export default App;
