export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="rest-container">
    <div class="ds-container">
        <h3>On Data Science</h3>
        <p>
            I have successfully completed a handful of Data Science & AI projects,
            such a C++ cryptocurrency recommendation engine implementation or
            a bank system's client classifier in Python. I have worked with related
            libraries, including:
        </p>
        <div>
            <img src="/assets/stack/kibana.png" width={80} alt="React logo" />
            <img src="/assets/stack/neogds.png" width={80} alt="React logo" />
            <img src="/assets/stack/sklearn.png" width={80} alt="React logo" />
            <img src="/assets/stack/echarts.png" width={120} alt="React logo" />
        </div>
    </div>
    <div class="devops-container">
        <h3>On DevOps</h3>
        <p>Experienced software delivery with Docker & Gradle pipelines.  </p>
    </div>
    <div class="on-blockchain">
        <h3>On Blockchain</h3>
        <p>Explored on Blockchain technologies, including Solidity.</p>
    </div>
    <div class="on-cloud">
        <h3>On Cloud</h3>
        <p>Dabbled with cloud technolgies, such us OpenFaaS.</p>
    </div>
    <div class="linux-container">
        <h3>On Linux</h3>
        <p>Been using Linux and Shell scripting the past 8 years.</p>
    </div>
</div>
)