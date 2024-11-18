import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Links() {
  document.title = "All Links";

  return (
    <>
      <div className="head-section">
        <h2>All Links</h2>
        <Link variant="primary" className="btn" to="addlink">
          <span>Add Link</span>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Social Media</th>
            <th>Icon</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td style={{ textTransform: "capitalize" }}>facebook</td>
            <td>
              <i class="fa-brands fa-facebook-f"></i>
            </td>
            <td>
              {" "}
              <Link
                to="https://www.facebook.com/abdulrahmanrizk24"
                target="_blank"
              >
                https://www.facebook.com/abdulrahmanrizk24
              </Link>{" "}
            </td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Link variant="primary" className="btn" to="1">
                  <span>Update</span>
                </Link>
                <Button variant="danger" className="btn">
                  <span>Delete</span>
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Links;
