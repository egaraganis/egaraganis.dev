export default (
{ title, children, comp, projects }: Lume.Data,
helpers: Lume.Helpers
) => (
<div class="rest-container">
    <div class="ds-container">
        <h3>On Data Science</h3>
        <p>
            Seasoned with a handful of AI / ML / DS projects along with knowledge following libraries:
        </p>
        <div>
            <img src="/assets/stack/kibana.png" width={80} alt="React logo" />
            <img src="/assets/stack/neogds.png" width={80} alt="React logo" />
            <img src="/assets/stack/sklearn.png" width={80} alt="React logo" />
            <img src="/assets/stack/echarts.png" width={120} alt="React logo" />
        </div>
    </div>
    <div class="others-container">
        <h3>Other Worth Considering Assets</h3>
        <ul>
            <li>Software delivery with Docker & Gradle pipelines.</li>
            <li>Knowledge on Blockchain technologies, including Solidity.</li>
            <li>Dabbled with Cloud technolgies, such us OpenFaaS.</li>
            <li>Been using Linux and Shell scripting the past 8 years.</li>
        </ul>
    </div>
</div>
)