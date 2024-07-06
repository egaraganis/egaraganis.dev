export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div className="projects-container">
      <h1>Projects</h1>
      <p>a software engineer</p>
      {projects.categories.map((category, index) => (
         <div key={index}>
            <h2>{category.title}</h2>
            <div className="category-projects-container">
               {category.projects.map((project, projectIndex) => (
                  <comp.project key={projectIndex} project={project} />
               ))}
            </div>
         </div>
      ))}
   </div>
);
