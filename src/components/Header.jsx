import styled from "styled-components";

const Header = (props) => {
    const {closeMenu} = props
  return (
    <Container>
      <Content className="py-4 px-2 d-flex justify-content-start justify-content-lg-between align-items-center">
        <Menu className="d-lg-none pe-2">
          <i class="bi bi-list cursor-pointer" onClick={() => closeMenu()}></i>
        </Menu>
        <div className="d-flex text-white align-items-center ms-3">
          <Logo className="bg-primary rounded-circle">
            <i class="bi bi-command"></i>
          </Logo>
          <div className=" ms-3 ms-lg-5">
            <h4 className="m-0">Dashboard</h4>
            <small className="text-muted">Buy and Sell order NFT</small>
          </div>
        </div>
        <Search className="bg-glass text-muted p-2 d-none d-lg-block">
          <i class="bi bi-search"></i>
          <input
            className="ms-2 pe-lg-5"
            type="text"
            placeholder="Search for arts"
          />
        </Search>
      </Content>
    </Container>
  );
};

const Container = styled.header``;
const Content = styled.div``;
const Logo = styled.div`
  padding: 12px 20px;
  i {
    font-size: 20px;
  }
`;
const Search = styled.div`
  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #5c636a;
  }
`;

const Menu = styled.div`
  border-right: 1px dotted rgba(255, 255, 255, 0.2);
  i {
    color: #661fda;
    font-size: 40px;
  }
`;

export default Header;
