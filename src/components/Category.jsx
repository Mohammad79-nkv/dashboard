import { useRef } from "react";
import styled from "styled-components";

const Category = () => {
  const ref = useRef();

  const handleActive = (e) => {
    const btns = [...ref.current.children];
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <Container className="mt-4 mb-5 mx-auto d-flex justify-content-between align-items-center">
      <div className="d-none d-lg-flex justify-content-center" ref={ref}>
        <button className="btn btn-primary-2 active mx-2" onClick={(e) => handleActive(e)}>Collectibles</button>
        <button className="btn btn-primary-2  mx-2" onClick={(e) => handleActive(e)}>Arts</button>
        <button className="btn btn-primary-2  mx-2" onClick={(e) => handleActive(e)}>Utility</button>
        <button className="btn btn-primary-2  mx-2" onClick={(e) => handleActive(e)}>Sports</button>
        <button className="btn btn-primary-2  mx-2" onClick={(e) => handleActive(e)}>Gaming</button>
      </div>
      <div class="dropdown d-lg-none me-lg-5">
        <button
          class="btn btn-primary-2 active dropdown-toggle me-lg-5"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul
          className="dropdown-menu bg-glass px-1"
          aria-labelledby="dropdownMenuButton1"
        >
          <li className="dropdown-item cursor-pointer">Collectibles</li>
          <li className="dropdown-item cursor-pointer">Arts</li>
          <li className="dropdown-item cursor-pointer">Utility</li>
          <li className="dropdown-item cursor-pointer">Sports</li>
          <li className="dropdown-item cursor-pointer">Gaming</li>
        </ul>
      </div>
      <div className=" d-flex justify-content-center align-items-center">
          <h6 className="text-muted m-0 cursor-pointer">
            View All <i class="bi bi-arrow-right"></i>
          </h6>
        </div>
    </Container>
  );
};

const Container = styled.div`
    /* max-width: 1100px; */
`;

export default Category;
