import { ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function HeadContact(){
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
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Phone Link</th>
                        <th>Location</th>
                        <th>Email Image</th>
                        <th>Phone Image</th>
                        <th>Location Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td width="8%">Contact Us</td>
                        <td width="15%">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. Contact Us for more information.0000</td>
                        <td>admin@gmail.com</td>
                        <td>012 3456 789</td>
                        <td>+20123456789</td>
                        <td>Online</td>
                        <td><Image src="https://i.imgur.com/7Zl2sbw.png" width="50"/></td>
                        <td><Image src="https://i.imgur.com/7Zl2sbw.png" width="50"/></td>
                        <td><Image src="https://i.imgur.com/7Zl2sbw.png" width="50"/></td>
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

export default HeadContact;