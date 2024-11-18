import { useEffect, useState } from "react";
import { ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Logos() {
  document.title = "All Logos";

  return (
    <>
      <div className="head-section">
        <h2>All Logos</h2>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Logos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <Image
                src="https://www.themezaa.com/html/pofo/images/logo.png"
                className="img-fluid"
                width={140}
              />
            </td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Link variant="primary" className="btn" to="1">
                  <span>Update</span>
                </Link>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <Image
                src="https://www.themezaa.com/html/pofo/images/logo-white.png"
                className="img-fluid"
                width={140}
              />
            </td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Link variant="primary" className="btn" to="1">
                  <span>Update</span>
                </Link>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Logos;
