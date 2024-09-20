export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="front-end-container stack-card">
    <h3>On Frontend Development</h3>
    <p>
        I've been developing web-apps for over 8 years.
    </p>
    <div>
        <div class="tech">
            <img src="/assets/stack/lume.svg" width={40} alt="Lume logo" />
            <div>
                <h2>Lume</h2>
                <h4>For Static Websites</h4>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/nextjs.svg" width={40} alt="Next.JS logo" />
            <div>
                <h2>Next.JS</h2>
                <h4>> 4 years</h4>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/react.svg" width={40} alt="React logo" />
            <div>
                <h2>React</h2>
                <h4>> 6 years</h4>
            </div>
        </div>
        <div class="tech">
            <div class="html-css">
                <img src="/assets/stack/html.svg" width={40} alt="HTML logo" />
                <img src="/assets/stack/css.svg" width={40} alt="CSS logo"/>
            </div>
            <div>
                <h2>HTML + CSS</h2>
                <h4>Highly experienced</h4>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/react-native.svg" width={40} alt="React Native logo" />
            <div>
                <h2>React Native</h2>
                <h4>For Mobile Development </h4>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/tauri.svg" width={40} alt="Tauri logo" />
            <div>
                <h2>Tauri</h2>
                <h4>For Cross Desktop Development</h4>
            </div>
        </div>
    </div>
</div>
)