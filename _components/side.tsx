export default (
    { title, children, comp, articles }: Lume.Data,
    helpers: Lume.Helpers
) => (
    <section id="side" className="side-container">
        <div class="section-header">
            <img src="/assets/side.svg" width="30"/>
            <h1>Side Quests</h1>
        </div>
        <div class="avh-container">
            <div class="ap-container">
                <div class="navigable-header">
                    <h2>Articles & Presentations</h2>
                    <div>
                        <button class="hide" id="backButton-articles">
                            <img src="/assets/left.png" width={30} alt="React logo" />
                        </button>
                        <button id="nextButton-articles">
                            <img src="/assets/next.png" width={30} alt="React logo" />
                        </button>
                    </div>
                </div>
                <ul id="articles-tripplet-3">
                    <li>
                        <div class="image-container"></div>
                        <div>
                            <h3>{articles[0].title}</h3>
                            <p>{articles[0].description}</p>
                        </div>
                    </li>
                    <li>
                        <div class="image-container"></div>
                        <div>
                            <h3>{articles[1].title}</h3>
                            <p>{articles[1].description}</p>
                        </div>
                    </li>
                    <li>
                        <div class="image-container"></div>
                        <div>
                            <h3>{articles[2].title}</h3>
                            <p>{articles[2].description}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="v-container">
                <h2>Volunteering</h2>
                <ul>
                    <li>
                        <div>
                            <div class="image-container-2"></div>
                            <h3>Co-creator of <a href="cognihub.gr">Cognihub</a></h3>
                        </div>
                        <p>An interdisciplinary students hub revolving cognitive sciences.</p>
                    </li>
                    <li>
                        <div>
                            <div class="image-container-2"></div>
                            <h3>Co-creator of <a href="cognihub.gr">Pyrsos</a></h3>
                            </div>
                            <p>Programmers spot.</p>
                    </li>
                </ul>
                <h2>Hackathons</h2>
                <div class="hackathon-div">
                    <div>
                        <div class="image-container-2"></div>
                        <h3>European Hackathon EUvsCovid</h3>
                        </div>
                        <p>Programmers spot.</p>
                </div>
            </div>
        </div>
    </section>
);
