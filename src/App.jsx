import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm.jsx";
import NoProjects from "./components/NoProjects.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [addProject, setAddProject] = useState(false);
  const [Projects, setProjects] = useState([]);

  function handleAddProject() {
    setAddProject(true);
  }

  function saveProject(title, desc) {
    setProjects((previousProjects) => {
      return [{ title: title, desc: desc }, ...previousProjects];
    });

    console.log(Projects);
  }

  function cancelProject() {
    setAddProject(false);
  }

  const ProjectForm = addProject ? (
    <AddProjectForm
      onSaveProject={saveProject}
      onCancelProject={cancelProject}
    />
  ) : (
    <NoProjects onAddProject={handleAddProject} />
  );

  return (
    <main className="h-dvh mt-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} />
      {ProjectForm}
    </main>
  );
}

export default App;
