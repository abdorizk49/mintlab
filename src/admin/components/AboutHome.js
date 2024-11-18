import { ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function AboutHome(){
    document.title = 'About Home'


    return(
        <>
            <div className="head-section">
                <h2>About Home</h2>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Description2</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>about us</td>
                        <td style={{width: '30%'}}>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</td>
                        <td style={{width: '30%'}}>"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences",</td>
                        <td>
                            <Image src="https://i.imgur.com/R9oeNkK.jpg" className="img-fluid" width="100%" />
                        </td>
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

export default AboutHome;