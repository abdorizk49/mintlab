import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function OrderPricePage() {
  document.title = "All Order Price";

  return (
    <>
      <div className="head-section">
        <h2>All order Contacts</h2>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center align-middle" scope="row">
              1
            </th>
            <td style={{ textTransform: "capitalize" }}>name</td>
            <td>
              <Link href="tel:0123465978">0123456789</Link>
            </td>
            <td>
              <Link href="mailto:asd@gmail.com">asd@gmail.com</Link>
            </td>
            <td style={{ textTransform: "capitalize" }}>asd</td>
            <td>asdhjkkl;'</td>
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

export default OrderPricePage;
