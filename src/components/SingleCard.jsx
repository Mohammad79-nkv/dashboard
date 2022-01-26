import styled from "styled-components";

const SingleCard = () => {
    return ( 
        <Card className="bg-glass d-flex justify-content-center align-items-center me-4">
            <Content className="p-2 py-3">
                <div className="rounded-5">
                    <img className="rounded-5" src="/images/Desktop - 1 (1).png"/>
                </div>
                <div className="ms-2 mt-1">
                    <small className="text-muted">Auction</small>
                    <p className="text-gray">Vitalik Buterin</p>
                </div>
                <div className="mx-2 d-flex justify-content-between align-items-center">
                    <Bitcoin className="d-flex justify-content-center align-items-center">
                        <i class="bi bi-currency-bitcoin text-white rounded-circle px-1 me-2"></i>
                        <p className="text-muted m-0">0.1680</p>
                    </Bitcoin>
                    <Like className="d-flex justify-content-center align-items-center">
                    <i class="bi bi-heart text-muted me-2"></i>
                    <small className="text-muted">55</small>
                    </Like>
                </div>
            </Content>
        </Card>
     );
}

const Card = styled.div`
max-width:230px;
 img{
    max-width:200px !important;
    object-fit: contain;
}
`;
const Content = styled.div``;
const Bitcoin = styled.div`
    i {
        display: inline-block;
        transform: rotate(20deg);
        background-color: #F79319;
    }
`;
const Like = styled.div``;
 
export default SingleCard;