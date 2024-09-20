export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="back-end-container stack-card">
    <h3>On Backend Development</h3>
    <p>
        Experience with Microservices & RESTful architectures, on both Java and JS backend codebases.
    </p>
    <div>
        <div>
            <h6>Frameworks</h6>
            <div class="tech">
                <img src="/assets/stack/spring.svg" width={40} alt="Lume logo" />
                <div>
                    <h2>Spring</h2>
                    <h4>
                        > 4 years + Knowledge on Spring Security, Data & Hibernate
                    </h4>
                </div>
            </div>
            <div class="tech">
                <img src="/assets/stack/node.svg" width={40} alt="Next.JS logo" />
                <div>
                    <h2>NodeJS</h2>
                    <h4>
                        Capable with JS backend codebases, such as <a href="https://expressjs.com/">ExpressJS</a>
                    </h4>
                </div>
            </div>
        </div>
        <div>
            <h6>Event Streaming</h6>
            <div class="tech">
                <img src="/assets/stack/kafka.svg" width={40} alt="React logo" />
                <div>
                    <h2>Kafka</h2>
                    <h4>
                        Worked with Kafka event's streaming architecture.
                    </h4>
                </div>
            </div>
            <h6>Testing</h6>
            <h4>
                Testing with <a>Spock</a> and <a>JUnit</a>
            </h4>
        </div>
    </div>
</div>
)