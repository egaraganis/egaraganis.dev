export default (
    { title, children, comp, articles }: Lume.Data,
    helpers: Lume.Helpers
) => (
    <div id="side" className="side-container">
        <h1>Side Quests</h1>
        <div class="row">
            <div class="ap-container">
                <h2>Articles & Presentations</h2>
                <ul>
                    {articles.map((article, index) => (
                        <li>
                            <div class="image-container"></div>
                            <div>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div class="v-container">
                <h2>Volunteering</h2>
                <ul>
                    <li>
                        <div class="image-container-2"></div>
                        <div>
                            <h3>
                                Co-founder of <a href="cognihub.gr">Cognihub</a>
                            </h3>
                            <p>
                                An interdisciplinary students hub revolving
                                cognitive sciences.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="image-container-2"></div>
                        <div>
                            <h3>
                                Co-founder of <a href="cognihub.gr">Pyrsos</a>
                            </h3>
                            <p>Programmers spot.</p>
                        </div>
                    </li>
                </ul>
                <h2>Hackathons & Enterpreneurship</h2>
                <div class="hackathon-div">
                    <div class="image-container-2"></div>
                    <div>
                        <h3>
                            Co-founder of <a href="cognihub.gr">Pyrsos</a>
                        </h3>
                        <p>Programmers spot.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
