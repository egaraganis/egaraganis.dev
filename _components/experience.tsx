export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<section id="experience" className="experience-container">
   <div class="section-header">
      <i class="icon experience-icon" />
      <h1>Experience</h1>
   </div>
   <h2>Backend Software Engineer </h2>
   <div class="experience-section">
      <div className="step">
         <h3>Information Technology Support Centre of the Hellenic Army</h3>
         <h3>Early 2024 - Late 2025</h3>
      </div>

      <ol>
         <li>
            Responsible for the backend development of two inter-governmental services that were successfully led to delivery, Spring.
         </li>
         <li>
            Co-implemented the OAuth2 protocol over Greek’s Government Service Insurance System (GSIS), Spring and Spring Security.
         </li>
         <li>
            Developed a Java client over GSIS Proof of Tax Awareness over SOAP.
         </li>
         <li>
            Developed a high-level Java client over GSIS Citizen Gate REST API.
         </li>
      </ol>
   </div>
   <div class="experience-section">
      <h2>Full-Stack Software & Data Engineer</h2>
      <div className="step">
         <h3>Niovity</h3>
         <h3>Early 2020 - Late 2023</h3>
      </div>

      <ol>
         <li>
            Contributed as a core engineer within Niovity’s datalake and BaaS realms.
         </li>
         <li>
            Authored Elasticsearch’s integration, search and data analytics.
         </li>
         <li>
            Co-implemented the front and backend parts of an in house query language compiler for Datalake’s search API, Elasticsearch and Java.
         </li>
         <li>
            Augmented the in-house query language compiler with graph operators, allowing query federation over multiple datastores, Elasticsearch and Neo4j.
         </li>
         <li>
            Release management and application deployment, Docker and Gradle.
         </li>
         <li>
            Release management and application deployment with Docker and Gradle over self-hosted environments.
         </li>
         <li>
            <b>Bonus</b>: Conducted my master thesis on Niovity’s semantic data lake, proposing the utiliza-
            tion of knowledge graphs and graph technologies for improved data exploration, metadata
            management and advanced analytics.
         </li>
      </ol>
   </div>
</section>
);