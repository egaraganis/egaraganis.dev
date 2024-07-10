export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="experience" className="education-container">
      <h1>Experience</h1>
      <h2>Backend Developer </h2>
      <h3>Information Technology Support Centre of the Hellenic Army</h3>

      <p>
         During my service on the army, I was employed as a backend developer, where I:
      </p>

      <ol>
         <li>Authored business logic for an inter-governmental service workflow, in Spring.</li>
         <li>Developed a Java client over Greek's Government Service Insurance System (GSIS) Citizen Gate REST API.</li>
         <li>Co-implemented the OAuth2 protocol over GSIS, in Spring and Spring Security.</li>
      </ol>

      <h2>Software Engineer and Full-Stack Developer</h2>
      <h3>Niovity</h3>
      <span>September 2020 - January 2024</span>

      <p>
         Niovity offers backend-as-a-service solutions and vertical repository management, over its data lake implementation. During my employment as a software engineer, I:
      </p>

      <ol>
         <li> Authored the Elasticsearch datastore management, including the search and analytics querying, the automatic mapping generation and batch operations in Java, along with text analysis parts - custom analyzers. </li> 
         <li> Co-implemented the front and backend parts of an in house query language compiler, over Elasticsearch. </li>
         <li> Augmented the in-house query language compiler with graph operators, along with the query federation over multiple datastores (Elasticsearch \& Neo4j). </li>
         <li> Developed front-end applications for backoffice user interfaces and headless CMS using NextJS and React. </li>
         <li> Automated the domain-driven generation of visualizations diagrams (class, ref). </li>
         <li> Release management and application deployment with Docker and Gradle over self-hosted environments. </li>
         <li> Bonus: Conducted my master thesis on Niovity's semantic data lake to propose the utilization of knowledge graphs and graph technologies for improved data exploration, metadata management and advanced analytics. </li>
      </ol>
   </div>
);
