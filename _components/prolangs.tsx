export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="prolangs-container">
    <h3>Programming Languages</h3>
    <div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/java.svg" width={50} alt="Java logo" />
                <p><b>Java / Groovy </b> > 7 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/js.svg" width={50} alt="JS/TS logo" />
                <p><b>JS / TS </b> > 8 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/python.svg" width={50} alt="Python logo" />
                <p><b>Python </b> > 5 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <div class="low-level-langs">
                    <h4><span>C</span> / <span>C++</span> / </h4> <img src="/assets/stack/rust.svg" width={30} alt="C, C++, Rust" />
                </div>
                <p> Handful experience</p>
            </div>
        </div>
    </div>
</div>
)