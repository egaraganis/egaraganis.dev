export default (
   { title, children, comp }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <html>
      <head>
         <title>{title}</title>
         <link rel="stylesheet" href="/styles/base.css" />
         <link rel="stylesheet" href="/styles/sidebar.css" />
         <link rel="stylesheet" href="/styles/about.css" />
         <link rel="stylesheet" href="/styles/projects.css" />
         <link rel="stylesheet" href="/styles/education.css" />
         <link rel="stylesheet" href="/styles/stack.css" />
         <link rel="stylesheet" href="/styles/experience.css" />
      </head>
      <body>
         <comp.sidebar />
         <div className="main-container">{children}</div>
      </body>
   </html>
);
