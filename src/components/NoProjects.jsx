import NoProjectsLogo from "../assets/no-projects.png";

export default function NoProjects() {
  return (
    <div className="h-screen w-screen place-content-center text-center">
      <img
        className="w-auto h-20 object-contain mx-auto"
        src={NoProjectsLogo}
      />
      <h2 className="mt-3">No Projects to be displayed yet</h2>
      <p className="mt-3">Add your first project!</p>
    </div>
  );
}
