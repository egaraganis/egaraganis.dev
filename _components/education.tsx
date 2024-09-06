export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <section id="education" className="education-container">
      <div class="section-header">
         <img src="/assets/education.svg" width="40"/>
         <h1>Education</h1>
      </div>
      <div className="degree-container">
         <div>
            <h2>Bachelor at Department of Informatics & Telecommunications</h2>
            <h3>National Kapodistrian University of Athens</h3>
            <p>
               Specilized in:
            </p>
            <ul>
               <li>Data Information and Knowledge Management</li>
               <li>Computer Systems: Software & Hardware</li>
            </ul>
            <p>GPA: 7.52 / 10</p>
         </div>
         <div>
            <h4>Thesis</h4>
            <p>
               During my bachelor thesis, {" "}
               <a href="">
                  A Web-Based Survey Manager for Building Dynamic Surveys with
                  Nested Visualizations
               </a>
               , I built a web survey management tool offering untuitive survey
               building user interfaces, along with an advanced analytics engine
               for survey results exploration and visualizations.
            </p>
            <h6>[1] A. Smith, "An Analysis of Quantum Computing," Journal of Theoretical Physics, vol. 57, no. 4, pp. 231-240, 2023.</h6>
         </div>
      </div>
      <div className="degree-container">
         <div>
            <h2>Master at Information Systems Development and Security</h2>
            <h3>Athens University Of Economics And Business</h3>
            <p>
               Certification in:
            </p>
            <ul>
               <li>Cybersecurity & Critical Infrastructures Protection</li>
            </ul>
            <p>GPA: 8.94 / 10</p>
         </div>
         <div>
            <h4>Thesis</h4>
            <p>
               During my master thesis, {" "}
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
            <h6>[1] A. Smith, "An Analysis of Quantum Computing," Journal of Theoretical Physics, vol. 57, no. 4, pp. 231-240, 2023.</h6>
         </div>
      </div>
   </section>
);
