export default (
   { title, children, comp }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div className="projects-container">
      <h1>Projects</h1>
      <p>a software engineer</p>
      {projects.map(project => <comp.project/> )}
   </div>
);
