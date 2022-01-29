import styled from "styled-components";
import Category from "../components/Category";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import PaymentCard from "../components/PaymentCard";
import SileBar from "../components/SileBar";
import TopArtistCard from "../components/TopArtistCard";
import SinglCardWrapper from "../components/wrapper/SingleCardWrapper";

const MainLayout = () => {
  return (
    <Container>
      <Content className="container-fluid row m-0 p-0">
        <LeftBar className="col-12 col-lg-8 col-md-7 m-0 ps-0">
          <Header></Header>
          <div className="d-flex w-100">
            <div >
              <SileBar />
            </div>
            <div className="mx-auto w-100 ms-2 ms-xl-5">
              <div className="d-flex flex-column justify-content-between flex-xl-row align-items-center ms-2   w-100">
                <div className="mb-2 mb-xl-0">
                  <MainCard />
                </div>
                <div clssName="">
                  <TopArtistCard />
                </div>
              </div>
              <div>
                <Category />
              </div>
              <div>
              <SinglCardWrapper />
              </div>
            </div>
          </div>
        </LeftBar>
        <RightBar className="col-12 col-lg-4 col-md-5">
          <div className="w-100 mt-2">
            <PaymentCard />
          </div>
        </RightBar>
      </Content>
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div``;
const LeftBar = styled.div``;
const RightBar = styled.div``;

export default MainLayout;
