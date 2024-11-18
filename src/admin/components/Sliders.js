import { Button, ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function Sliders(){
    document.title = 'All Sliders'


    return(
        <>
            <div className="head-section">
                <h2>All Sliders</h2>
                <Link variant="primary" className="btn" to='addslider'><span>Add Slider</span></Link>
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
                        <td>title</td>
                        <td>description</td>
                        <td>
                            <Image src="https://www.themezaa.com/html/pofo/images/homepage-9-slider-img-1.jpg" className="img-fluid" width="100%" style={{maxWidth: '300px'}} />
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

export default Sliders;