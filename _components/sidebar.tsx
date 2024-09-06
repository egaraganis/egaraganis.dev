export default (data: Lume.Data, helpers: Lume.Helpers) => (
<nav id="nav-bar">
   <div id="nav-content">
      <a href="#about">
         <div class="me" />
      </a>
      <a href="#about">
         <div class="nav-button">
            <i class="icon mdi--user" width="16px" />
            About
         </div>
      </a>
      <a href="#education">
         <div class="nav-button">
            <i class="icon cil--education" width="16px" />
            Education
         </div>
      </a>
      <a href="#stack">
         <div class="nav-button">
            <i class="icon layers" width="16px" />
            Stack
         </div>
      </a>
      <a href="#experience">
         <div class="nav-button">
            <i class="icon experience" width="10px" />
            Experience
         </div>
      </a>
      <a href="#projects">
         <div class="nav-button">
            <i class="icon projects" width="10px" />
            Projects
         </div>
      </a>
      <a href="#side">
         <div class="nav-button">
            <i class="icon side" width="10px" />
            Side Quests
         </div>
      </a>
      <a href="#interests">
         <div class="nav-button">
            <i class="icon interests" width="10px" />
            Interests
         </div>
      </a>
   </div>
</nav>
);