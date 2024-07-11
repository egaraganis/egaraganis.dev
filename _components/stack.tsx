export default (
   { title, children, comp, projects }: Lume.Data,
   helpers: Lume.Helpers
) => (
   <div id="stack" className="stack-container">
      <h1>Stack</h1>
      <div class="container">
         <div class="front-end-container">
            <h2>On Frontend Development</h2>
            <p>
               I've been developing frontend applications for over 8 years. I
               have been experimenting with various frameworks and technologies,
               including <a href="test">VueJS</a>, various UI & testing
               frameworks such as <a href="test">MUI</a>, with my main stack
               being:
            </p>
            <div>
               <div>
                  <img src="/assets/stack/lume.svg" alt="Lume logo" />
                  <div>
                     <p>Lume</p>
                     <p>
                        I've been using lume as my privamy SSG framework, for
                        static websites.
                     </p>
                  </div>
               </div>
               <div>
                  <img src="/assets/stack/nextjs.svg" alt="Next.JS logo" />
                  <div>
                     <p>Next.JS</p>
                     <p>
                        Been writing Next the last 3 years, due to its
                        granularity on writing pages and components whether on
                        server or the client.
                     </p>
                  </div>
               </div>
               <div>
                  <img src="/assets/stack/react.svg" alt="React logo" />
                  <div>
                     <p>React</p>
                     <p>
                        Been writing React over 5 years and its my primary
                        javascript framework.
                     </p>
                  </div>
               </div>
               <div>
                  <img src="/assets/stack/html.svg" alt="HTML and CSS logo" />
                  <img
                     src="/assets/stack/css.svg"
                     alt="My Happy SVG"
                     style={{ marginLeft: -60, marginTop: 20 }}
                  />
                  <div>
                     <p>HTML + CSS</p>
                     <p>
                        Love being as close as possible to native HTML and CSS
                        structuring and styling, including responsive desings.
                     </p>
                  </div>
               </div>
               <div>
                  <img
                     src="/assets/stack/react-native.svg"
                     alt="My Happy SVG"
                  />
                  <div>
                     <p>React Native</p>
                     <p>
                        I am extending the React knowledge over mobile
                        development with React Native
                     </p>
                  </div>
               </div>
               <div>
                  <img src="/assets/stack/tauri.svg" alt="My Happy SVG" />
                  <div>
                     <p>Tauri</p>
                     <p>
                        Isomorphic software across different device or runtime
                        is my top priority, with Tauri running on both desktop
                        and mobile apps.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div class="back-end-container"></div>
         <div class="databases-container"></div>
      </div>
   </div>
);
