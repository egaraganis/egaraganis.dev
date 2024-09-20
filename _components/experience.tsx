export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<section id="experience" className="experience-container">
   <div class="section-header">
      <i class="icon experience-icon" />
      <h1>Experience</h1>
   </div>
   <h2>Software Engineer & Backend Developer </h2>
   <div class="experience-section">
      <div className="step">
         <h3>Information Technology Support Centre of the Hellenic Army</h3>
         <h3>March 2024 - January 2025</h3>
      </div>

      <p>
         During my service on the army, I was employed as a backend developer,
         where I:
      </p>

      <ol>
         <li>
            Authored business logic for an inter-governmental service workflow,
            in Spring.
         </li>
         <li>
            Developed a Java client over Greek's Government Service Insurance
            System (GSIS) Citizen Gate REST API.
         </li>
         <li>
            Developed a Java client over GSIS Proof of Tax Awareness over SOAP.
         </li>
         <li>
            Co-implemented the OAuth2 protocol over GSIS, in Spring and Spring
            Security.
         </li>
      </ol>
   </div>
   <div class="experience-section">
      <h2>Software Engineer & Full-Stack Developer</h2>
      <div className="step">
         <h3>Niovity</h3>
         <h3>September 2020 - January 2024</h3>
      </div>

      <p>
         Niovity offers backend-as-a-service solutions and vertical repository
         management, over its data lake implementation. During my employment as
         a software engineer, I:
      </p>

      <ol>
         <li>
            Authored the Elasticsearch management, including analytics, batch operations, custom analyzers in Java.
         </li>
         <li>
            Co-implemented the front and backend parts of an in house query language compiler, over Elasticsearch.
         </li>
         <li>
            Augmented the in-house query language compiler with graph operators,
            along with the query federation over multiple datastores
            (Elasticsearch & Neo4j).
         </li>
         <li>
            Developed front-end applications and headless CMS using NextJS and React.
         </li>
         <li>
            Automated the domain-driven generation of diagrams.
         </li>
         <li>
            Release management and application deployment with Docker and Gradle over self-hosted environments.
         </li>
         <li>
            <b>Bonus</b>: Conducted my master thesis on Niovity's semantic data
            lake to propose the utilization of knowledge graphs and graph
            technologies for improved data exploration, metadata management and
            advanced analytics.
         </li>
      </ol>
   </div>
</section>
);