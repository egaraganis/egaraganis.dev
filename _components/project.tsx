export default (data: Lume.Data, helpers: Lume.Helpers) => (
   <div className="project-container">
      <table>
         <tr>
            <td className="table-header">title</td>
            <td>{data.project.title}</td>
         </tr>
         <tr>
            <td className="table-header">description</td>
            <td>{data.project.description}</td>
         </tr>
         <tr>
            <td className="table-header">built with</td>
            <td>
               {data.project.langs.map((lang) => (
                  <span>{lang}</span>
               ))}
            </td>
         </tr>
      </table>
   </div>
);
