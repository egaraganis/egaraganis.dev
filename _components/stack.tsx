export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <section id="stack" className="stack-container">
      <h1>Stack</h1>
      <div class="fields-of-knowledge">
         <comp.frontend />
         <comp.backend />
         <comp.dbs />
         <comp.prolangs />
      </div>
      <comp.rest />
   </section>
);
