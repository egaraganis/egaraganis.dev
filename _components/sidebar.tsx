export default (data: Lume.Data, helpers: Lume.Helpers) => (
<nav id="nav-bar">
   <input id="nav-toggle" type="checkbox" />
   <div id="nav-header">
      <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
   </div>
   <div id="nav-content">
      <div class="nav-button">
         <a href="#about">
            <div class="me" />
         </a>
      </div>
      <div class="nav-button">
         <a href="#about">
            <img src="/assets/test.svg" width="16px" />
            About
         </a>
      </div>
      <div class="nav-button">
         <a href="#education">
            <img src="/assets/education.png" width="14px" />
            Education
         </a>
      </div>
      <div class="nav-button">
         <a href="#stack">
            <img src="/assets/stack.png" width="14px" />
            Stack
         </a>
      </div>
      <div class="nav-button">
         <a href="#experience">
            <img src="/assets/experience.png" width="14px" />
            Experience
         </a>
      </div>
      <div class="nav-button">
         <a href="#projects">
            <img src="/assets/projects.png" width="15px" />
            Projects
         </a>
      </div>
      <div class="nav-button">
         <a href="#side">
            <img src="/assets/side.png" width="15px" />
            Side Quests
         </a>
      </div>
      <div class="nav-button">
         <a href="#interests">
            <img src="/assets/love.png" width="15px" />
            Interests
         </a>
      </div>
      <div id="nav-content-highlight"></div>
   </div>
   <div id="nav-footer">
      <p>2025</p>
   </div>
</nav>
);
