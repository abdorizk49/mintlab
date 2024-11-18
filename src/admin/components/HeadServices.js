import { useEffect, useState } from "react";
import { ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function HeadServices(){
    document.title = 'Head Services'


    return(
        <>
            <div className="head-section">
                <h2>Head Services</h2>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>span</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Services Provide For You.</td>
                        <td>WHAT WE CAN DO FOR YOU</td>
                        <td>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</td>
                        <td>
                            <ButtonGroup aria-label="Basic example">
                                <Link variant="primary" className="btn" to="1"><span>Update</span></Link>
                            </ButtonGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default HeadServices;