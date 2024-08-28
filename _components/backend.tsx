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
                        I've been using lume as my privamy SSG framework, for
                        static websites.
                    </p>
                </div>
            </div>
            <div class="tech">
                <img src="/assets/stack/node.svg" width={40} alt="Next.JS logo" />
                <div>
                    <h4>NodeJS</h4>
                    <p>
                        Been writing Next the last 3 years, due to its
                        granularity on writing pages and components whether on
                        server or the client.
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
                        Been writing React over 5 years and its my primary
                        javascript framework.
                    </p>
                </div>
            </div>
            <h6>Testing</h6>
            <p>
                Love being as close as possible to native HTML and CSS
                structuring and styling, including responsive desings.
            </p>
        </div>
    </div>
</div>
)