export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <section id="projects" className="projects-container">
      <div class="section-header">
         <i class="icon projects-icon invertable" style={{width: 22, height: 22}} />
         <h1>Projects</h1>
      </div>
      {projects.categories.map((category, index) => (
         <div key={index}>
            <div class="navigable-header">
               <h3>{category.title}</h3>
               <div>
                  <button class="hide invertable" id={`backButton-${category.id}`}>
                     <img src="/assets/left.png" width={30} alt="Previous Button" />
                  </button>
                  <button class="invertable" id={`nextButton-${category.id}`}>
                     <img src="/assets/next.png" width={30} alt="Next Button" />
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
   </section>
);
