import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Users() {
  document.title = "All Users";

  return (
    <>
      <div className="head-section">
        <h2>All Users</h2>
        <Link variant="primary" className="btn" to="adduser">
          <span>Add User</span>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>admin@gmail.com</td>
            <td>username</td>
            <td>*************</td>
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

export default Users;
