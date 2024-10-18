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
                <h2>Java / Groovy </h2><h4> > 7 years</h4>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/js.svg" width={50} alt="JS/TS logo" />
                <h2>JS / TS </h2><h4>> 8 years</h4>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/python.svg" width={50} alt="Python logo" />
                <h2>Python </h2><h4> > 5 years</h4>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <h2 class="low-level-langs">
                    C / C++ / <img src="/assets/stack/rust.svg" class="invertable" width={25} alt="Rust"/>
                </h2>
                <h4> Handful experience</h4>
            </div>
        </div>
    </div>
</div>
)