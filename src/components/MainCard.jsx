import styled from "styled-components";

const MainCard = () => {
  return (
    <Card className="bg-glass p-0 m-0">
      <Content className=" d-flex flex-column p-3 flex-sm-row">
        <LeftBar className="rounded-5">
          <div className="mx-auto h-100 w-100 w-sm-100 d-flex ">
          <img className="w-100  mx-auto img-fluid " src="/images/Desktop - 1 (1).png" />
          </div>
        </LeftBar>
        <RightBar className=" ms-4 mt-3 mt-sm-0 text-white ">
          <span className="bg-dark-2 d-flex justify-content-center align-items-center  rounded-5 p-1 me-5">
            <i class="bi bi-person ms-1"></i>
            <p className="text-muted ms-1 me-3 mb-0">Gabriel Dean</p>
          </span>
          <div className="mt-3">
            <h5>Elone&Dogo | Smart-Toy</h5>
            <div className="mt-3">
              <small className="text-muted">Auction ending in</small>
              <p className="mt-2">
                <span className="bg-dark-2 p-2 rounded-3 me-2">01</span>:{" "}
                <span className="bg-dark-2 p-2 rounded-3 mx-1">25</span> :{" "}
                <span className="bg-dark-2 p-2 rounded-3 mx-1">30</span>
              </p>
              <small className="text-muted">Current Bid</small>
              <h4>0.0840 BTC</h4>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn text-white rounded-5 px-4 bg-primary">Place a bid</button>
            <button className="btn btn-outline-primary ms-4 rounded-5 px-4 text-white">View Art</button>
          </div>
        </RightBar>
      </Content>
    </Card>
  );
};
const Card = styled.div`
  max-width: 570px;
`;
const Content = styled.div`
  @media (min-width: 1200px) and (max-width: 1480px){
    flex-direction: column !important;:
  }
`;
const LeftBar = styled.div``;
const RightBar = styled.div``;

export default MainCard;
