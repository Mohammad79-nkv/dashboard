import styled from "styled-components";

const TopArtistCard = () => {
  return (
    <Card className="bg-glass text-light p-4">
      <Content>
        <div className="mb-4">
          <h5>Top Artist</h5>
        </div>
        <div className="d-flex align-items-center b-b pb-3 mb-3">
          <i class="bi bi-person me-2 p-2 px-3 bg-dark-2 rounded-circle"></i>
          <div className="me-5 ms-2">
            <p className="m-0">Gabriel Dean</p>
            <small className="text-muted">410 Items</small>
          </div>
          <small className="text-primary ms-5 cursor-pointer">Follow</small>
        </div>
        <div className="d-flex align-items-center b-b pb-3 mb-3">
          <i class="bi bi-person me-2 p-2 px-3 bg-dark-2 rounded-circle"></i>
          <div className="me-5 ms-2">
            <p className="m-0">Mathew Lean</p>
            <small className="text-muted">380 Items</small>
          </div>
          <small className="text-primary ms-5 cursor-pointer">Follow</small>
        </div>
        <div className="d-flex align-items-center  pb-3 mb-3">
          <i class="bi bi-person me-2 p-2 px-3 bg-dark-2 rounded-circle"></i>
          <div className="me-5 ms-2">
            <p className="m-0">Santel bauer</p>
            <small className="text-muted">320 Items</small>
          </div>
          <small className="text-primary ms-5 cursor-pointer">Follow</small>
        </div>
        <div className="my-2 mt-4 d-flex justify-content-center align-items-center">
          <h6 className="text-muted m-0 cursor-pointer">
            View All <i class="bi bi-arrow-right"></i>
          </h6>
        </div>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  max-width: 380px;
`;
const Content = styled.div``;

export default TopArtistCard;