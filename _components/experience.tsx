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
         <h3>Early 2024 - Late 2024</h3>
      </div>

      <ul>
         <li>Developed two in-house backend services, Spring.</li>
         <li>Integrated oAuth2.0 over Greek’s Digital Governance Information Systems (GSIS).</li>
         <li>Implemented a high-level Java client over GSIS Citizen Gate REST API.</li>
      </ul>
   </div>
   <div class="experience-section">
      <h2>Fullstack & Data Software Engineer</h2>
      <div className="step">
         <h3>Niovity</h3>
         <h3>Early 2020 - Late 2023</h3>
      </div>

      <ul>
         <li>Co-implemented an in-house query language compiler, Java, Elastic, Neo4j.</li>
         <li>Managed Elasticsearch’s search and analytics engine.</li>
         <li>Backend development over business specific flows, Spring, Kafka.</li>
         <li>Frontend development of client and server side apps, NextJS and React.</li>
         <li>All kind of technical writing for internal and sdk documentation.</li>
         <li>Release management and application deployment, Docker and Gradle.</li>
         <li>
            <b>Bonus</b>: Conducted thesis on Niovity’s semantic datalake, proposing increased metadata manage-
            ment and advanced analytics.
         </li>
      </ul>
   </div>
   <div class="experience-section">
      <h2>Fullstack Developer</h2>
      <div className="step">
         <h3>Cognihub</h3>
         <h3>Early 2019 - Late 2024</h3>
      </div>
      <ul>
         <li>
         Fullstack development with React and NextJS.
         </li>
      </ul>
   </div>
</section>
);