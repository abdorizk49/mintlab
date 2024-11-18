import { ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function HeadContactRequest(){
    document.title = 'Head Contact Request'


    return(
        <>
            <div className="head-section">
                <h2>Head Contact Request</h2>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Contact Request</td>
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

export default HeadContactRequest;