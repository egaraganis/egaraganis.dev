export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="front-end-container">
    <h2>On Frontend Development</h2>
    <p>
        I've been developing frontend applications for over 8 years. I
        have been experimenting with various frameworks and technologies,
        including <a href="test">VueJS</a>, various UI frameworks and design
        systems, such as (<a href="test">MUI</a> and <a href="test">Material</a>).
    </p>
    <div>
        <div class="tech">
            <img src="/assets/stack/lume.svg" width={40} alt="Lume logo" />
            <div>
                <h4>Lume</h4>
                <p>My privamy SSG framework, for static websites.</p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/nextjs.svg" width={40} alt="Next.JS logo" />
            <div>
                <h4>Next.JS</h4>
                <p>My versatile web framework the past 4 years.</p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/react.svg" width={40} alt="React logo" />
            <div>
                <h4>React</h4>
                <p>My primary JS framework the past 6 years.</p>
            </div>
        </div>
        <div class="tech">
            <div>
                <img src="/assets/stack/html.svg" width={40} alt="HTML and CSS logo" />
                <img src="/assets/stack/css.svg" width={40} alt="My Happy SVG" style={{ marginTop: -30, marginLeft: -5 }} />
            </div>
            <div>
                <h4>HTML + CSS</h4>
                <p>I love writing plain old native HTML and CSS.</p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/react-native.svg" width={40} alt="My Happy SVG" />
            <div>
                <h4>React Native</h4>
                <p>I maintain my React knowledge on mobile development. </p>
            </div>
        </div>
        <div class="tech">
            <img src="/assets/stack/tauri.svg" width={40} alt="My Happy SVG" />
            <div>
                <h4>Tauri</h4>
                <p>
                    For isomorphic software across different devices.
                </p>
            </div>
        </div>
    </div>
</div>
)