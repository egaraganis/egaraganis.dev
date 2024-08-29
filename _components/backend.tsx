export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="back-end-container">
    <h2>On Backend Development</h2>
    <p>
        I consider myself an experienced backend developer exposed on Microservices & RESTful architectures,
        on both Java and JS backend codebases.
    </p>
    <div>
        <div>
            <h6>Frameworks</h6>
            <div class="tech">
                <img src="/assets/stack/spring.svg" width={40} alt="Lume logo" />
                <div>
                    <h4>Spring</h4>
                    <p>
                        I have familiarized myself with the Spring ecosystem the past 4 years, including Spring Security, Spring Data & Hibernate.
                    </p>
                </div>
            </div>
            <div class="tech">
                <img src="/assets/stack/node.svg" width={40} alt="Next.JS logo" />
                <div>
                    <h4>NodeJS</h4>
                    <p>
                        I am experienced with JS backend codebases, such as ExpressJS.
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
                        I have worked with Kafka event's streaming architecture.
                    </p>
                </div>
            </div>
            <h6>Testing</h6>
            <p>
                Committed on Test-Driven Development (TDD) approach with Spock and JUnit.
            </p>
        </div>
    </div>
</div>
)