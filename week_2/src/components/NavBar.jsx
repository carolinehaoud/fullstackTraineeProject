import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <img src= "https://images.squarespace-cdn.com/content/53bf2a9be4b05a05f0bd263c/1484560744718-DP3TUIH6L91H0AONXPRG/Screen+Shot+2017-01-16+at+4.58.38+AM.png?content-type=image%2Fpng" width="300" alt="Spec Logo" />
      <h1>Spec Sources</h1>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export default Navbar;