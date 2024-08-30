export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <p>a software engineer</p>
      {projects.categories.map((category, index) => (
         <div key={index}>
            <div class="navigable-header">
               <h2>{category.title}</h2>
               <button id={`nextButton-${category.id}`}>
                  <img src="/assets/next.png" width={30} alt="React logo" />
               </button>
            </div>
            <div id={`${category.id}-tripplet-0`} className="category-projects-container">
                  <comp.project id={`project-card-${category.id}-1`} project={category.projects[0]} />
                  <comp.project id={`project-card-${category.id}-2`} project={category.projects[1]} />
                  <comp.project id={`project-card-${category.id}-3`} project={category.projects[2]} />
            </div>
         </div>
      ))}
   </div>
);
