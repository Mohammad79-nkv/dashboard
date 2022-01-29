import styled from "styled-components";
import SileBar from "./SileBar";

const SideBarmenu = (props) => {
  const { closeMenu, isClose } = props;

  return (
    <Container className={isClose ? " h-full active-menu d-lg-none" : " h-full d-lg-none"}>
      <Content className="mt-4">
        <i
          class="bi bi-x-lg text-white mt- ms-3 cursor-pointer"
          onClick={() => closeMenu()}
        ></i>
        <p></p>
        <Search className="bg-glass text-muted p-2 mx-2">
          <i class="bi bi-search"></i>
          <input
            className="ms-2 pe-lg-5"
            type="text"
            placeholder="Search for arts"
          />
        </Search>
        <div>
          <SileBar isInMenu="true" closeMenu={closeMenu} />
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #0f0f10;
  width: 300px;
  position: fixed;
  z-index: 100;
  left: -300px;
  transition: 350ms;
  &.active-menu {
    left: 0;
    transition: 350ms;
  }
  i {
    font-size: 30px;
  }
`;
const Search = styled.div`
    i{
        font-size: 20px;
    }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #5c636a;
  }
`;
const Content = styled.div``;

export default SideBarmenu;
