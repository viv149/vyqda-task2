import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Vivek Task 2 ",
  description: "Vivek task 2",
};

export default function Home() {
  return (
    <div className="p-5">
      <Container>
        <Row>
          <Col sm={12} md={6} className="offset-md-3">
            <h1 className="text-center">Assingment Task 2</h1>
            <p className="text-muted fs-5 fw-semibold text-center">Simple User List Dashboard</p>
            <h5 className="fs-4 text-dark text-center"><i className="bi bi-person-fill"></i> Developed by Vivek Sharma</h5> 
            <div className="my-5 bg-light p-3">
              <p className="fs-4 text-dark">Project Overview</p>
              <ul className="">
                <li>Next JS(App Router) Simple Dashboard Application</li>
                <li>User Data Visualization</li>
              </ul>
            </div>
            <Link href="/dashboard" className="btn btn-warning w-100">Go to Dashboard <i className="bi bi-arrow-right"></i></Link>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
