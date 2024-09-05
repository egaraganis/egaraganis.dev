export default (data: Lume.Data, helpers: Lume.Helpers) => (
<a class="project-container" href={data.project.code} target="_blank">
   <table>
      <tr>
         <td>
            {data.project.title}
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
</a>
);