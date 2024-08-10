export default (data: Lume.Data, helpers: Lume.Helpers) => (
   <div className="project-container">
      <table id={data.id}>
         <tr>
            <td>{data.project.title}</td>
         </tr>
         <tr>
            <td>{data.project.description}</td>
         </tr>
         <tr>
            <td>
               {data.project.langs.map((lang) => (
                  <span>{lang}</span>
               ))}
            </td>
         </tr>
      </table>
   </div>
);
