import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CommonNav=() => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" style={{position:'absolute',top:'15rem',right:'10rem'}}>
          <Container fluid >
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  마이페이지
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/etc/seeRP">롤링페이퍼로 전환하기</Nav.Link>
                  <Nav.Link href="/myParty/seeBalance">내 밸런스게임 보기</Nav.Link>
                  <Nav.Link href="/myParty">내 파티룸 가기</Nav.Link>
                  <Nav.Link href="/etc/setinfo">내 정보 설정</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CommonNav;
