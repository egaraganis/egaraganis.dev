export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="dbs-container stack-card">
    <h3>On Databases</h3>
    <p>
        Confident in both SQL and NoSQL, including OLAP.
    </p>
    <div>
        <div class="tech-vertical">
            <img class="invertable" src="/assets/stack/elastic.png" width={100} alt="React logo" />
            <h4>
                > 5 years, Highly Experienced
            </h4>
        </div>
        <div class="tech-vertical">
            <img class="invertable" src="/assets/stack/neo4j.png" width={88} alt="Lume logo" />
            <h4>
                Familiar with Neo4j's DB and DS ecosystem.
            </h4>
        </div>
        <div class="tech-vertical">
            <img class="invertable" src="/assets/stack/mysql.png" width={84} alt="Next.JS logo" style={{marginTop: -15}} />
            <h4>
                Confident with MySQL dbs.
            </h4>
        </div>
    </div>
</div>
)