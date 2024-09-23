import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm.jsx";
import NoProjects from "./components/NoProjects.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [addProject, setAddProject] = useState(false);

  function handleAddProject() {
    setAddProject(true);
  }

  const ProjectForm = addProject ? <AddProjectForm /> : undefined;

  return (
    <main className="h-dvh mt-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} />
      <NoProjects onAddProject={handleAddProject} />
      {ProjectForm}
    </main>
  );
}

export default App;
