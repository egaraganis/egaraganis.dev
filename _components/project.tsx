export default (data: Lume.Data, helpers: Lume.Helpers) => (
   <div className="project-container">
      <table>
         <tr>
            <td>
               <b>{data.project.title}</b>
            </td>
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
