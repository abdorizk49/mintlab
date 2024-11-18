import { ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function HeadPortfolio(){
    document.title = 'Head Portfolio'


    return(
        <>
            <div className="head-section">
                <h2>Head Portfolio</h2>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title Home</th>
                        <th>Title Inner</th>
                        <th>span</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>You Can Customize Everything!</td>
                        <td>Related Projects</td>
                        <td>PORTFOLIO DEFAULT</td>
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

export default HeadPortfolio;