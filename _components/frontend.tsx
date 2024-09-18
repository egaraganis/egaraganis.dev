export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="front-end-container">
    <h3>On Frontend Development</h3>
    <p>
        I've been developing frontend applications for over 8 years. I
        have been experimenting with various frameworks and technologies,
        including <a>VueJS</a>, various UI frameworks and design
        systems, such as (<a>MUI</a> and <a>Material</a>).
    </p>
    <div>
        <div class="tech">
            <img src="/assets/stack/lume.svg" width={40} alt="Lume logo" />
            <div>
                <h4>Lume</h4>
                <p>For Static Websites</p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/nextjs.svg" width={40} alt="Next.JS logo" />
            <div>
                <h4>Next.JS</h4>
                <p>> 4 years</p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/react.svg" width={40} alt="React logo" />
            <div>
                <h4>React</h4>
                <p>> 6 years</p>
            </div>
        </div>
        <div class="tech">
            <div class="html-css">
                <img src="/assets/stack/html.svg" width={40} alt="HTML logo" />
                <img src="/assets/stack/css.svg" width={40} alt="CSS logo"/>
            </div>
            <div>
                <h4>HTML + CSS</h4>
                <p>Highly experienced</p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/react-native.svg" width={40} alt="React Native logo" />
            <div>
                <h4>React Native</h4>
                <p>For Mobile Development </p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/tauri.svg" width={40} alt="Tauri logo" />
            <div>
                <h4>Tauri</h4>
                <p>
                    For Cross Desktop Development
                </p>
            </div>
        </div>
    </div>
</div>
)