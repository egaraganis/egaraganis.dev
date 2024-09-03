export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="projects" className="projects-container">
      <h1>Projects</h1>
      {projects.categories.map((category, index) => (
         <div key={index}>
            <div class="navigable-header">
               <h3>{category.title}</h3>
               <div>
                  <button class="hide" id={`backButton-${category.id}`}>
                     <img src="/assets/next.png" width={30} alt="React logo" />
                  </button>
                  <button id={`nextButton-${category.id}`}>
                     <img src="/assets/next.png" width={30} alt="React logo" />
                  </button>
               </div>
            </div>
            <div id={`${category.id}-tripplet-3`} className="category-projects-container">
                  <comp.project project={category.projects[0]} />
                  <comp.project project={category.projects[1]} />
                  <comp.project project={category.projects[2]} />
            </div>
         </div>
      ))}
   </div>
);
