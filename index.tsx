export const title = "egaraganis.dev";
export const layout = "base.tsx";

export default (
   { title, children, comp }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <>
      <comp.about />
      <comp.education />
      <comp.stack />
      <comp.experience />
      <comp.projects />
      <comp.pursuits />
      <comp.interests />
   </>
);
