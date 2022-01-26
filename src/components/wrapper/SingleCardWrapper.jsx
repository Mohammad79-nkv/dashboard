import styled from "styled-components";
import SingleCard from "../SingleCard";


const SinglCardWrapper = () => {
    return ( 
        <Container className="d-flex justify-content-between flex-nowrap overflow-auto">
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </Container>
     );
}
const Container = styled.div`
&::-webkit-scrollbar {
  display: none;
}
`;
 
export default SinglCardWrapper;