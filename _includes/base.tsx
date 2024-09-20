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
         <link rel="stylesheet" href="/styles/pursuits.css" />
         <link rel="stylesheet" href="/styles/interests.css" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
         <comp.sidebar />
         <div className="main-container">
            <div class="wave" />
            {children}</div>
         <script type="module" src="/scripts/paginate.js"></script>
         <script type="module" src="/scripts/sidebar.js"></script>
      </body>
   </html>
);
