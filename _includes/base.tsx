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
      </head>
      <body>
         <comp.sidebar />
         <div class="main-container">{children}</div>
      </body>
   </html>
);
