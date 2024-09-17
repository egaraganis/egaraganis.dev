export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <section id="stack" class="stack-container">
      <div class="section-header">
         <i class="icon stack-icon" />
         <h1>Stack</h1>
      </div>
      <div class="fields-of-knowledge">
         <comp.frontend />
         <comp.backend />
         <comp.dbs />
         <comp.prolangs />
      </div>
      <comp.rest />
   </section>
);
