import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPages() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This is a React app to leave a feedback for a product or a service
        </p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPages;
