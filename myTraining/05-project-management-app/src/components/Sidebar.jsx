import Button from './Button';

export default function Sidebar({
  projectsState,
  onClickAddProject,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {' '}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onClickAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectsState.projects.map((project, index) => (
          <li key={index}>
            <button
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              onClick={() => onSelectProject(index)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
