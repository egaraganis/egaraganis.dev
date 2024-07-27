export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="side" className="side-container">
      <h1>Side Quests</h1>
      <h2>Volunteering</h2>
      <ul>
         <li>
            Co-founder of <a href="cognihub.gr">Cognihub</a>: An
            interdisciplinary students hub revolving cognitive sciences.
         </li>
         <li>
            Co-creator of <a href="cognihub.gr">Pyrsos.dev</a>: Programmers spot
         </li>
      </ul>
      <h2>Articles & Presentations</h2>
      <ul>
         <li>UX: Why, What & How</li>
         <li>
            Overview of European Union NIS Directives: A Brief Comparative Study
         </li>
         <li>
            Defuse: A Dependency-Guided Function Scheduler to Mitigate Cold
            Starts on FaaS Platforms
         </li>
         <li>In the Age of Prostagma and Hacking</li>
         <li>Yet another ChatGPT simpost</li>
      </ul>
      <h2>Hackathons & Enterpreneurship</h2>
      <ul>
         <li>European Hackathon: EU vs Covid</li>
         <li>Archimedes and Agreektourism</li>
      </ul>
   </div>
);
