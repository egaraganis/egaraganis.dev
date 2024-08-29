export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="prolangs-container">
    <h2>Programming Languages</h2>
    <div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/java.svg" width={50} alt="Lume logo" />
                <h4>Java</h4>
            </div>
            <p>
                Java / Groovy developer for over 7 years.
            </p>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/js.svg" width={50} alt="Next.JS logo" />
                <h4>JS / TS</h4>
            </div>
            <p>
                JS developer for over 8 years.
            </p>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/python.svg" width={50} alt="React logo" />
                <h4>Python</h4>
            </div>
            <p>
                Variety of data science projects with Python.
            </p>
        </div>
        <div class="lang-vertical">
            <div>
                <h4>C / C++ / </h4>
                <img src="/assets/stack/rust.svg" width={35} alt="React logo" />
            </div>
            <p>
                Handful experience on low-level programming.
            </p>
        </div>
    </div>
</div>
)