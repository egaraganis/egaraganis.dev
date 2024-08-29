export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="dbs-container">
    <h2>On Databases</h2>
    <p>
        I have been utilizing both SQL and NoSQL (document and graph-based) for different kinds of needs and architectures.
    </p>
    <div>
        <div class="tech-vertical">
            <img src="/assets/stack/elastic.png" width={100} alt="React logo" />
            <p>
                I have honed myself with Elastic's analytics engine and Java/JS client for over 5 years.
            </p>
        </div>
        <div class="tech-vertical">
            <img src="/assets/stack/neo4j.png" width={100} alt="Lume logo" />
            <p>
                Experienced with Neo4j's graph database and its graph data science ecosystem.
            </p>
        </div>
        <div class="tech-vertical">
            <img src="/assets/stack/mysql.png" width={80} alt="Next.JS logo" style={{marginTop: -15}} />
            <p>
                I have developed various projects atop SQLs transactional fashion.
            </p>
        </div>
    </div>
</div>
)