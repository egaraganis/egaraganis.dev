export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="prolangs-container">
    <h2>Programming Languages</h2>
    <p>
        I've been developing frontend applications for over 8 years. I
        have been experimenting with various frameworks and technologies,
        including <a href="test">VueJS</a>, various UI & testing
        frameworks such as <a href="test">MUI</a>, with my main stack
        being:
    </p>
    <div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/java.svg" width={50} alt="Lume logo" />
                <h4>Java</h4>
            </div>
            <p>
                I've been using lume as my privamy SSG framework, for
                static websites.
            </p>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/js.svg" width={50} alt="Next.JS logo" />
                <h4>JS / TS</h4>
            </div>
            <p>
                Been writing Next the last 3 years, due to its
                granularity on writing pages and components whether on
                server or the client.
            </p>
        </div>
        <div class="lang-vertical">
            <div>
                <img src="/assets/stack/python.svg" width={50} alt="React logo" />
                <h4>Python</h4>
            </div>
            <p>
                Been writing React over 5 years and its my primary
                javascript framework.
            </p>
        </div>
        <div class="lang-vertical">
            <div>
                <h4>C / C++ /</h4>
                <img src="/assets/stack/rust.svg" width={35} alt="React logo" />
            </div>
            <p>
                Been writing React over 5 years and its my primary
                javascript framework.
            </p>
        </div>
    </div>
</div>
)