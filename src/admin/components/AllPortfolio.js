import { Button, ButtonGroup, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function AllPortfolio(){
    document.title = 'All Portfolio'


    return(
        <>
            <div className="head-section">
                <h2>All portfolio</h2>
                <Link variant="primary" className="btn" to='addportfolio'><span>Add portfolio</span></Link>
            </div>
            <div className="table-overlay">
                <Table striped bordered hover className="all-portfolio">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Client</th>
                            <th>URL</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th width="2%">1</th>
                            <td width="15%">Graphic Design</td>
                            <td width="5%">graphic</td>
                            <td width="10%">2023-12</td>
                            <td width="7%">Company1</td>
                            <td width="10%"><Link href="https://www.elezaby-group.com/profile" target="_blank">https://www.elezaby-group.com/profile</Link></td>
                            <td width="30%">In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme). that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</td>
                            <td width="15%">
                                <Image src="https://i.imgur.com/BMQz4wW.png" className="img-fluid" width="100%" />
                            </td>
                            <td width="15%">
                                <ButtonGroup aria-label="Basic example">
                                    <Link variant="primary" className="btn"  to="1/images"><span>view images</span></Link>
                                    <Link variant="primary" className="btn" to="1/update"><span>Update</span></Link>
                                    <Button variant="danger" className="btn">
                                        <span>Delete</span>
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <th width="2%">2</th>
                            <td width="15%">Graphic Design</td>
                            <td width="5%">graphic</td>
                            <td width="10%">2023-12</td>
                            <td width="7%">Company1</td>
                            <td width="10%"><Link href="https://www.elezaby-group.com/profile" target="_blank">https://www.elezaby-group.com/profile</Link></td>
                            <td width="30%">In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme). that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</td>
                            <td width="15%">
                                <Image src="https://i.imgur.com/BMQz4wW.png" className="img-fluid" width="100%" />
                            </td>
                            <td width="15%">
                                <ButtonGroup aria-label="Basic example">
                                    <Link variant="primary" className="btn"  to="1/images"><span>view images</span></Link>
                                    <Link variant="primary" className="btn" to="1/update"><span>Update</span></Link>
                                    <Button variant="danger" className="btn">
                                        <span>Delete</span>
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <th width="2%">3</th>
                            <td width="15%">Graphic Design</td>
                            <td width="5%">graphic</td>
                            <td width="10%">2023-12</td>
                            <td width="7%">Company1</td>
                            <td width="10%"><Link href="https://www.elezaby-group.com/profile" target="_blank">https://www.elezaby-group.com/profile</Link></td>
                            <td width="30%">In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme). that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</td>
                            <td width="15%">
                                <Image src="https://i.imgur.com/BMQz4wW.png" className="img-fluid" width="100%" />
                            </td>
                            <td width="15%">
                                <ButtonGroup aria-label="Basic example">
                                    <Link variant="primary" className="btn"  to="1/images"><span>view images</span></Link>
                                    <Link variant="primary" className="btn" to="1/update"><span>Update</span></Link>
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

export default AllPortfolio;