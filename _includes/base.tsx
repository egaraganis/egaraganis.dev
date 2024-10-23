export default (
   { title, children, comp }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <html lang="en" data-theme="light">
      <head>
         <title>Evangelos Garaganis</title>
         <meta name="description" content="Since not everything can fit into a two-pager CV, I created this portfolio to further project my work." />
         <link rel="stylesheet" href="/styles/base.css" />
         <link rel="stylesheet" href="/styles/sidebar.css" />
         <link rel="stylesheet" href="/styles/about.css" />
         <link rel="stylesheet" href="/styles/projects.css" />
         <link rel="stylesheet" href="/styles/education.css" />
         <link rel="stylesheet" href="/styles/stack.css" />
         <link rel="stylesheet" href="/styles/experience.css" />
         <link rel="stylesheet" href="/styles/pursuits.css" />
         <link rel="stylesheet" href="/styles/interests.css" />
         <meta name="viewport" content="width=device-width, auto-scale=1" />
      </head>
      <body>
         <comp.sidebar />
         <div className="main-container">
            <div id="theme-button" />
            {children}
         </div>
         <script type="module" src="/scripts/paginate.js"></script>
         <script type="module" src="/scripts/sidebar.js"></script>
         <script type="module" src="/scripts/theme.js"></script>
      </body>
   </html>
);
