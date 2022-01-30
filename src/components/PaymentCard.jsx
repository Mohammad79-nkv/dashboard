import styled from "styled-components";
import masterCard from "../assets/mc_symbol.svg";

const PaymentCard = () => {
  return (
    <Card className="bg-glass mx-auto w-100">
      <Content className="d-flex flex-column align-items-center justify-content-around h-100 p-4">
        <User className="d-flex flex-column align-items-center text-white">
          <i class="bi bi-person-fill bg-dark-2 px-3 py-2 mb-3 rounded-circle"></i>
          <h5 className="mb-1">Luminaire</h5>
          <small className="text-muted">@Luminaire_Lucianesia</small>
          <div className="mt-3 d-flex justify-content-center">
            <i class="bi bi-heart text-muted bg-dark-2 px-3 py-2 mx-2 rounded-circle"></i>
            <i class="bi bi-chat-dots text-muted bg-dark-2 px-3 py-2 mx-2 rounded-circle"></i>
            <i class="bi bi-bell text-muted bg-dark-2 px-3 py-2 mx-2 rounded-circle"></i>
          </div>
        </User>
        <CardBank className="text-white w-100 p-3 rounded-5 mt-4">
          <div className="d-flex justify-content-between mb-5">
            <i class="bi bi-currency-bitcoin text-white rounded-circle px-1 me-2"></i>
            <small className="me-2">**** **** 9850</small>
          </div>
          <div className="d-flex align-items-end justify-content-between">
            <div>
              <p className="mb-2">Bitcoin</p>
              <h5>1.9015208</h5>
            </div>
            <img src={masterCard} />
          </div>
        </CardBank>
        <RecentAc className="w-100 ms-3 mt-4 text-white">
          <div className="">
            <h5>Recent Activities</h5>
            <small className="text-muted">24 Jun 2021</small>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-start mb-4">
              <i class="bi bi-person-circle text-gray bg-primary px-2 py-1 rounded-circle"></i>
              <div className="d-flex flex-column ms-3">
                <p className="m-0">Block Fukientea</p>
                <small className="text-muted">Liked your post Echidna</small>
                <small className="text-muted">15 min ago</small>
              </div>
            </div>
            <div className="d-flex align-items-start  mb-4">
              <i class="text-gray bg-dark-2 px-2 py-2 rounded-circle">
                <small>NFT</small>
              </i>
              <div className="d-flex flex-column ms-3">
                <p className="m-0">NFT Pixel Project</p>
                <small className="text-muted">
                  1 edition listed for 0.018 BTC
                </small>
                <small className="text-muted">30 min ago</small>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <i class="bi bi-person-circle text-gray bg-secondary px-2 py-1 rounded-circle"></i>
              <div className="d-flex flex-column ms-3">
                <p className="m-0">Beods Sessed</p>
                <small className="text-muted">Transfered from 0xb560624</small>
                <small className="text-muted">45 min ago</small>
              </div>
            </div>
          </div>
        </RecentAc>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  max-width: 500px;
  height: 900px;
`;
const Content = styled.div``;
const User = styled.div``;
const CardBank = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  i {
    display: inline-block;
    transform: rotate(20deg);
    background-color: #f79319;
  }
  img {
    width: 60px;
  }
`;
const RecentAc = styled.div``;

export default PaymentCard;
