import { Button, ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function AboutMore(){
    document.title = 'About Us'


    return(
        <>
            <div className="head-section">
                <h2>About Us</h2>
                <Link variant="primary" className="btn" to='addAboutMore'><span>Add More</span></Link>
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
                        <td>about us</td>
                        <td style={{width: '30%'}}>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</td>
                        <td>
                            <Image src="https://i.imgur.com/R9oeNkK.jpg" className="img-fluid" width="100%" />
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

export default AboutMore;