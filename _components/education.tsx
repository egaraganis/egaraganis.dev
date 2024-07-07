export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="education" className="education-container">
      <h1>Education</h1>
      <div className="degree-container">
         <div>
            <h2>Bachelor at Department of Informatics & Telecommunications</h2>
            <p>
               I acuired my bachelor's degree at National Kapodistrian
               University of Athens, where I specilized in:
            </p>
            <ul>
               <li>Data Information and Knowledge Management</li>
               <li>Computer Systems: Software & Hardware</li>
            </ul>
            <p>GPA: 7.52 / 10</p>
         </div>
         <div>
            <h3>Thesis</h3>
            <p>
               During my thesis:{" "}
               <a href="">
                  A Web-Based Survey Manager for Building Dynamic Surveys with
                  Nested Visualizations
               </a>
               , I built a web survey management tool offering untuitive survey
               building user interfaces, along with an advanced analytics engine
               for survey results exploration and visualizations.
            </p>
            <p>Thesis preview</p>
         </div>
      </div>
      <div className="degree-container">
         <div>
            <h2>Master at Information Systems Development and Security</h2>
            <p>
               I acuired my master degree at Athens University Of Economics And
               Business, where I received my specilization certification in:
            </p>
            <ul>
               <li>Cybersecurity & Critical Infrastructures Protection</li>
            </ul>
            <p>GPA: 8.94 / 10</p>
         </div>
         <div>
            <h3>Thesis</h3>
            <p>
               During my thesis:{" "}
               <a href="">
                  Leveraging Semantic Data Lakes Capabilites Using Knowledge
                  Graphs & Graph Technologies
               </a>
               , I proposed the unification of an Actioning and Decisioning
               knowledge graph atop Niovity's semantic data lake to implement
               its semantic layer and further augment the metadata management,
               data exploration and lineage, along with enhancement of graph
               querying and graph data science capabilities.
            </p>
            <p>Read my presentation</p>
         </div>
      </div>
   </div>
);
