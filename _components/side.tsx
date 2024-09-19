export default (
    { title, children, comp, articles }: Lume.Data,
    helpers: Lume.Helpers
) => (
    <section id="side" className="side-container">
        <div class="section-header">
            <i class="icon pursuits-icon" />
            <h1>Pursuits</h1>
        </div>
        <div class="avh-container">
            <div class="ap-container">
                <div class="navigable-header">
                    <h2>Articles & Presentations</h2>
                    <div>
                        <button class="hide" id="backButton-articles">
                            <img src="/assets/left.png" width={30} alt="Previous Button" />
                        </button>
                        <button id="nextButton-articles">
                            <img src="/assets/next.png" width={30} alt="Next Button" />
                        </button>
                    </div>
                </div>
                <div class="articles-presentations-container" id="articles-tripplet-3">
                    <a href={articles[0].link} class="article-presentation-card" target="_blank">
                        <div class="image-container" style={{backgroundImage: `url(${articles[0].img})`, backgroundColor: `${articles[0].bgColor}`}} />
                        <div>
                            <h3>{articles[0].title}</h3>
                            <p>{articles[0].description}</p>
                        </div>
                    </a>
                    <a href={articles[1].link} class="article-presentation-card" target="_blank">
                        <div class="image-container" style={{backgroundImage: `url(${articles[1].img})`, backgroundColor: `${articles[1].bgColor}`}} />
                        <div>
                            <h3>{articles[1].title}</h3>
                            <p>{articles[1].description}</p>
                        </div>
                    </a>
                    <a href={articles[2].link} class="article-presentation-card" target="_blank">
                        <div class="image-container" style={{backgroundImage: `url(${articles[2].img})`, backgroundColor: `${articles[2].bgColor}`}} />
                        <div>
                            <h3>{articles[2].title}</h3>
                            <p>{articles[2].description}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="v-container">
                <h2>Volunteering</h2>
                <ul>
                    <li>
                        <div>
                            <div class="image-container-2" style={{ backgroundImage: "url(/assets/cognihub.png)"}}></div>
                            <h3>Co-creator of <a href="cognihub.gr">Cognihub</a></h3>
                        </div>
                        <p>An interdisciplinary students hub revolving cognitive sciences.</p>
                    </li>
                    <li>
                        <div>
                            <div class="image-container-2" style={{ backgroundColor: 'gainsboro' }}></div>
                            <h3>Co-creator of <a>Pyrsos</a></h3>
                            </div>
                            <p>Programmers spot.</p>
                    </li>
                </ul>
                <h2>Hackathons</h2>
                <a class="hackathon-div">
                    <div>
                        <div class="image-container-2" style={{ backgroundImage: "url(/assets/euvscovid.png)"}}></div>
                        <h3>European Hackathon EUvsCovid</h3>
                    </div>
                    <p>My submission on european hackathon tackling Covid19.</p>
                </a>
            </div>
        </div>
    </section>
);
