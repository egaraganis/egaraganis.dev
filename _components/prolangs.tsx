export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="prolangs-container">
    <h3>Programming Languages</h3>
    <div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/java.svg" width={50} alt="Lume logo" />
                <p><b>Java / Groovy </b> > 7 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/js.svg" width={50} alt="Next.JS logo" />
                <p><b>JS / TS </b> > 8 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/python.svg" width={50} alt="React logo" />
                <p><b>Python </b> > 5 years</p>
            </div>
        </div>
        <div class="lang-vertical">
            <div>
                <h4>C / C++ / </h4> <img src="/assets/stack/rust.svg" width={30} alt="React logo" />
                <p> Handful experience</p>
            </div>
        </div>
    </div>
</div>
)