export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="back-end-container">
    <h3>On Backend Development</h3>
    <p>
        I've been working as backend development with Microservices & RESTful architectures, on both Java and JS backend codebases.
    </p>
    <div>
        <div>
            <h6>Frameworks</h6>
            <div class="tech">
                <img src="/assets/stack/spring.svg" width={40} alt="Lume logo" />
                <div>
                    <h4>Spring</h4>
                    <p>
                        > 4 years + Knowledge on Spring Security, Data & Hibernate
                    </p>
                </div>
            </div>
            <div class="tech">
                <img src="/assets/stack/node.svg" width={40} alt="Next.JS logo" />
                <div>
                    <h4>NodeJS</h4>
                    <p>
                        Capable with JS backend codebases, such as <a href="https://expressjs.com/">ExpressJS</a>
                    </p>
                </div>
            </div>
        </div>
        <div>
            <h6>Event Streaming</h6>
            <div class="tech">
                <img src="/assets/stack/kafka.svg" width={40} alt="React logo" />
                <div>
                    <h4>Kafka</h4>
                    <p>
                        Worked with Kafka event's streaming architecture.
                    </p>
                </div>
            </div>
            <h6>Testing</h6>
            <p>
                Confident in testing with <a>Spock</a> and <a>JUnit</a>
            </p>
        </div>
    </div>
</div>
)