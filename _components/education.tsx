export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<section id="education" className="education-container">
   <div class="section-header">
      <i class="icon education-icon" />
      <h1>Education</h1>
   </div>
   <div className="degree-container">
      <div>
         <h2>Master's Degree in Information Systems Development and Security</h2>
         <div class="step">
            <h3>Athens University Of Economics And Business</h3>
            <h3>September 2021 - September 2023</h3>
         </div>
         <p>
            Certification in:
         </p>
         <ul>
            <li>Cybersecurity & Critical Infrastructures Protection</li>
         </ul>
         <p>GPA: 8.94 / 10</p>
      </div>
      <div>
         <h3>
            <a href="https://www.pyxida.aueb.gr/getfile.php?object_id=iid:10740&ds_id=PDF2" target="_blank">
               Leveraging Semantic Data Lakes Capabilites Using Knowledge Graphs & Graph Technologies
            </a>
         </h3>
         <p>
            Proposing the unification of an actioning and decisioning
            knowledge graph atop Niovity's semantic data lake to implement
            its semantic layer and further augment the metadata management,
            data exploration and lineage, along with enhancement of graph
            analytics.
         </p>
         <h5>[1] http://www.pyxida.aueb.gr/index.php?op=view_object&object_id=10857</h5>
      </div>
   </div>
   <div className="degree-container">
      <div>
         <h2>Bachelor's Degree in Informatics and Telecommunications</h2>
         <div class="step">
            <h3>National Kapodistrian University of Athens</h3>
            <h3>September 2014 - September 2020</h3>
         </div>
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
         <h3>
            <a href="https://pergamos.lib.uoa.gr/uoa/dl/object/2928673/file.pdf" target="_blank">
               A Web-Based Survey Manager for Building Dynamic Surveys with
               Nested Visualizations
            </a>
         </h3>
         <p>
            A web survey management tool offering untuitive survey building user interfaces, along with an advanced analytics engine
            for survey results exploration and visualizations.
         </p>
         <h5>[1] https://pergamos.lib.uoa.gr/uoa/dl/object/2928673</h5>
      </div>
   </div>
</section>
);