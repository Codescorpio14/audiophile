import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-msg">
      <h1>No page found or broken Link</h1>
      <Link to="/">Return to Home page...</Link>
    </div>
  );
}

export default Error;
