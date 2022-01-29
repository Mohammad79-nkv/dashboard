import styled from "styled-components";

const SingleCard = (props) => {
    const {image, auction, price, like}=props;
    return ( 
        <Card className="bg-glass d-flex justify-content-center align-items-center me-1">
            <Content className="p-2 py-3">
                <div className="rounded-5 w-100">
                    <img className="rounded-5 w-100" src={image}/>
                </div>
                <div className="ms-2 ms-xl-5 mt-1">
                    <small className="text-muted">Auction</small>
                    <p className="text-gray">{auction}</p>
                </div>
                <div className="mx-2 d-flex justify-content-between align-items-center">
                    <Bitcoin className="d-flex justify-content-center align-items-center">
                        <i class="bi bi-currency-bitcoin text-white rounded-circle px-1 me-2"></i>
                        <p className="text-muted m-0">{price}</p>
                    </Bitcoin>
                    <Like className="d-flex justify-content-center align-items-center">
                    <i class="bi bi-heart text-muted mx-1"></i>
                    <small className="text-muted">{like}</small>
                    </Like>
                </div>
            </Content>
        </Card>
     );
}

const Card = styled.div`
max-width:300px;
 img{
    max-width:200px !important;
    object-fit: contain;
}
@media (max-width: 768px) {
    width: 150px !important;
    height: 230px;
    p {
        font-size: 12px;
    }
    small {
        font-size: 10px;
    }
}
`;
const Content = styled.div``;
const Bitcoin = styled.div`
    i {
        display: inline-block;
        transform: rotate(20deg);
        background-color: #F79319;
    }
    @media (max-width: 768px) {
    small {
        font-size: 1px;
    }
}
`;
const Like = styled.div``;
 
export default SingleCard;