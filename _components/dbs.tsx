export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="dbs-container">
    <h3>On Databases</h3>
    <p>
        I have been utilizing both SQL and NoSQL (document and graph-based) for different kinds of needs and architectures.
    </p>
    <div>
        <div class="tech-vertical">
            <img src="/assets/stack/elastic.png" width={100} alt="React logo" />
            <p>
                > 5 years, Highly Experienced
            </p>
        </div>
        <div class="tech-vertical">
            <img src="/assets/stack/neo4j.png" width={80} alt="Lume logo" />
            <p>
                Familiar with Neo4j's DB and DS ecosystem.
            </p>
        </div>
        <div class="tech-vertical">
            <img src="/assets/stack/mysql.png" width={80} alt="Next.JS logo" style={{marginTop: -15}} />
            <p>
                Confident with MySQL dbs.
            </p>
        </div>
    </div>
</div>
)