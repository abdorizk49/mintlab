import { Button, ButtonGroup, Table } from "react-bootstrap";

function ContactFormPage() {
  document.title = "All Messages";

  return (
    <>
      <div className="head-section">
        <h2>All Messages</h2>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center align-middle">#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center align-middle" scope="row">
              1
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Subject</th>
            <th>Message</th>
            <td>
              <ButtonGroup aria-label="Basic example">
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

export default ContactFormPage;
