export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="stack" className="stack-container">
      <h1>Stack</h1>
      <div class="container">
         <comp.frontend />
         <comp.backend />
         <div class="databases-container"></div>
      </div>
   </div>
);
