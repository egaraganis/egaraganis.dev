export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="dbs-container">
    <h2>On Databases</h2>
    <p>
        I've been developing frontend applications for over 8 years. I
        have been experimenting with various frameworks and technologies,
        including <a href="test">VueJS</a>, various UI & testing
        frameworks such as <a href="test">MUI</a>, with my main stack
        being:
    </p>
    <div>
        <div class="tech-vertical">
            <img src="/assets/stack/neo4j.png" width={100} alt="Lume logo" />
            <p>
                I've been using lume as my privamy SSG framework, for
                static websites.
            </p>
        </div>
        <div class="tech-vertical">
            <img src="/assets/stack/mysql.png" width={80} alt="Next.JS logo" style={{marginTop: -15}} />
            <p>
                Been writing Next the last 3 years, due to its
                granularity on writing pages and components whether on
                server or the client.
            </p>
        </div>
        <div class="tech-vertical">
            <img src="/assets/stack/elastic.png" width={100} alt="React logo" />
            <p>
                Been writing React over 5 years and its my primary
                javascript framework.
            </p>
        </div>
    </div>
</div>
)