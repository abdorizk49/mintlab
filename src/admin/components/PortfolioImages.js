import { Button, ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function PortfolioImages(){
    document.title = "All Project Images 1"


    return(
        <>
            <div className="head-section">
                <h2>All Project Images</h2>
                <Link variant="primary" className="btn" to='addimage'><span>Add Image</span></Link>
            </div>
            <div className="table-overlay">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="text-center">Image</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td className="text-center">
                                <Image src="https://i.imgur.com/TOLoMCM.png" alt="Portfolio Image 1" className="img-fluid" width="100%" style={{maxWidth:'300px'}} />
                            </td>
                            <td className="text-center">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="danger" className="btn">
                                        <span>Delete</span>
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td className="text-center">
                                <Image src="https://i.imgur.com/TOLoMCM.png" alt="Portfolio Image 2" className="img-fluid" width="100%" style={{maxWidth:'300px'}} />
                            </td>
                            <td className="text-center">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="danger" className="btn">
                                        <span>Delete</span>
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td className="text-center">
                                <Image src="https://i.imgur.com/TOLoMCM.png" alt="Portfolio Image 3" className="img-fluid" width="100%" style={{maxWidth:'300px'}} />
                            </td>
                            <td className="text-center">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="danger" className="btn">
                                        <span>Delete</span>
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default PortfolioImages;