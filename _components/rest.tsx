export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="rest-container">
    <div class="ds-container stack-card">
        <h3>On Data Science</h3>
        <p>
            Seasoned with projects along with knowledge following libraries:
        </p>
        <div>
            <img src="/assets/stack/kibana.png" width={70} alt="React logo" />
            <img src="/assets/stack/neogds.png" width={70} alt="React logo" />
            <img src="/assets/stack/sklearn.png" width={70} alt="React logo" />
            <img src="/assets/stack/echarts.png" width={110} alt="React logo" />
        </div>
    </div>
    <div class="others-container stack-card">
        <h3>Other Worth Considering Assets</h3>
        <ul>
            <li>CI / CD with <a>Docker</a> & <a>Gradle</a> pipelines.</li>
            <li>Blockchain technologies, <a>Solidity</a>.</li>
            <li>Cloud technolgies, <a>OpenFaaS</a>.</li>
            <li>Linux and Shell scripting, > 8 years.</li>
        </ul>
    </div>
</div>
)