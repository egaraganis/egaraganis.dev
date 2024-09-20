export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="prolangs-container stack-card">
    <h3>Programming Languages</h3>
    <div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/java.svg" width={50} alt="Java logo" />
                <p><h2>Java / Groovy </h2> > 7 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/js.svg" width={50} alt="JS/TS logo" />
                <p><h2>JS / TS </h2> > 8 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/python.svg" width={50} alt="Python logo" />
                <p><h2>Python </h2> > 5 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <div class="low-level-langs">
                    <h2><h2>C</h2> / <h2>C++</h2> / </h2> <img src="/assets/stack/rust.svg" width={30} alt="C, C++, Rust" />
                </div>
                <p> Handful experience</p>
            </div>
        </div>
    </div>
</div>
)