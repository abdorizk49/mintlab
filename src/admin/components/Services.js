import { Button, ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function Services(){
    document.title = 'All services'

    return(
        <>
            <div className="head-section">
                <h2>All services</h2>
                <Link variant="primary" className="btn" to='addservice'><span>Add Service</span></Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>service</td>
                        <td>description</td>
                        <td>
                            <Image src="http://www.themezaa.com/html/pofo/images/logo-white.png" className="img-fluid" width="100%" />
                        </td>
                        <td>
                            <ButtonGroup aria-label="Basic example">
                                <Link variant="primary" className="btn" to="1"><span>Update</span></Link>
                                <Button variant="danger" className="btn">
                                    <span>Delete</span>
                                </Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>service</td>
                        <td>description</td>
                        <td>
                            <Image src="http://www.themezaa.com/html/pofo/images/logo-white.png" className="img-fluid" width="100%" />
                        </td>
                        <td>
                            <ButtonGroup aria-label="Basic example">
                                <Link variant="primary" className="btn" to="1"><span>Update</span></Link>
                                <Button variant="danger" className="btn">
                                    <span>Delete</span>
                                </Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Services;