import styled from "styled-components";
import SingleCard from "../SingleCard";


const SinglCardWrapper = () => {
    return ( 
        <Container className="d-flex justify-content-between flex-nowrap overflow-auto">
            <SingleCard image="/images/Desktop - 1 (1) (2).png" auction="Vitalik Buterin" price="0.1680" like="50"/>
            <SingleCard image="/images/Desktop - 1 (3) (3).png" auction="Amygdalae Park" price="0.2260" like="65"/>
            <SingleCard image="/images/Desktop - 1 (1) (5).png" auction="Smart Toy" price="0.1895" like="55"/>
            <SingleCard image="/images/Desktop - 1 (1) (4).png" auction="Knuckess Echidna" price="0.1655" like="70"/>
        </Container>
     );
}
const Container = styled.div`
&::-webkit-scrollbar {
  display: none;
}
`;
 
export default SinglCardWrapper;