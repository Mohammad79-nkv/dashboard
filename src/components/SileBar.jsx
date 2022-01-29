import { useRef } from "react";
import styled from "styled-components";

const SileBar = (props) => {
  const { isInMenu, isClose, closeMenu } = props;
  const ref = useRef();

  const handleActive = (e) => {
    const items = [...ref.current.children];
    // console.log(items);
    items.forEach((item) => item.classList.remove("active-item"));
    e.currentTarget.classList.add("active-item");
    if (isInMenu) {
      closeMenu();
    }
  };

  return (
    <Container
      className={
        !isInMenu
          ? "list-unstyled m-0 p-0 d-none d-lg-block"
          : "list-unstyled m-0 p-0 "
      }
      ref={ref}
    >
      <div
        className="m-0 p-0 mt-3 active-item"
        onClick={(e) => handleActive(e)}
      >
        <Item className="py-2 cursor-pointer">
          <i class="bi bi-house-fill ms-4 px-3 py-2"></i>
        </Item>
      </div>
      <div className="mt-4" onClick={(e) => handleActive(e)}>
        <Item className="py-2 cursor-pointer">
          <i class="bi bi-cart ms-4 px-3 py-2"></i>
        </Item>
      </div>
      <div className="mt-4" onClick={(e) => handleActive(e)}>
        <Item className="py-2 cursor-pointer">
          <i class="bi bi-credit-card ms-4 px-3 py-2"></i>
        </Item>
      </div>
      <div className="mt-4" onClick={(e) => handleActive(e)}>
        <Item className="py-2 cursor-pointer">
          <i class="bi bi-compass ms-4 px-3 py-2"></i>
        </Item>
      </div>
      <div className="mt-4" onClick={(e) => handleActive(e)}>
        <Item className="py-2 cursor-pointer">
          <i class="bi bi-messenger ms-4 px-3 py-2"></i>
        </Item>
      </div>
      <div className="mt-4" onClick={handleActive}>
        <Item className=" py-2 cursor-pointer">
          <i class="bi bi-gear ms-4 px-3 py-2"></i>
        </Item>
      </div>
    </Container>
  );
};

const Container = styled.ul`
  @media (max-width: 992px) {
  }
  .active-item {
    li {
      border-left: 3px solid #4551d7;
      i {
        background: rgb(171, 15, 15);
        background: linear-gradient(
          0deg,
          rgba(171, 15, 15, 0) 25%,
          rgba(36, 36, 36, 1) 100%
        );
        color: #4551d7;
      }
    }
  }
`;
const Item = styled.li`
  i {
    font-size: 22px;
    border-radius: 15px;
  }
`;

export default SileBar;
