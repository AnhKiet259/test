import "./Dashboard.css";

export default function RegisterPage() {
    const ChartURL = "https://charts.mongodb.com/charts-test-mongodb-qllsz/public/dashboards/98eae5a6-2add-45ab-948b-7758ad595128";
    const ChartURL1 = "https://charts.mongodb.com/charts-test-mongodb-qllsz/public/dashboards/174d54d9-606a-47c9-af8c-e127983457e4";
    const ChartURL2 = "https://charts.mongodb.com/charts-test-mongodb-qllsz/public/dashboards/e53d2896-89aa-44cf-8889-5e278fa0dd8b";
    const ChartURL3 = "https://charts.mongodb.com/charts-test-mongodb-qllsz/public/dashboards/b9d3449e-b6cf-4ae0-b6ac-e16728f03774";

    return (
        <div>

            <iframe
                title="Dashboard"
                width="100%"
                height="3400"
                src={ChartURL}
                frameBorder="0"
            ></iframe>
        </div>
    );
}