import { useState } from "react";
import styled from "styled-components";
import Category from "../components/Category";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import PaymentCard from "../components/PaymentCard";
import SideBarmenu from "../components/SideBarMenu";
import SileBar from "../components/SileBar";
import TopArtistCard from "../components/TopArtistCard";
import SinglCardWrapper from "../components/wrapper/SingleCardWrapper";

const MainLayout = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const handelCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <Container className="">
      <SideBarmenu closeMenu={handelCloseMenu} isClose={closeMenu} />
      <Content className="container-fluid row m-0 p-0">
        <LeftBar className="col-12 col-lg-8 col-md-7 m-0 ps-0">
          <Header closeMenu={handelCloseMenu} />
          <div className="d-flex w-100">
            <div>
              <SileBar closeMenu={handelCloseMenu} isClose={closeMenu} />
            </div>
            <div className="mx-auto w-100 ms-2 ms-xl-5">
              <div className="d-flex flex-column justify-content-between flex-xl-row align-items-center ms-2   w-100">
                <div className="mb-2 mb-xl-0">
                  <MainCard />
                </div>
                <div clssName="w-100">
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

const Container = styled.div`
    overflow-x:hidden ;
`;
const Content = styled.div``;
const LeftBar = styled.div``;
const RightBar = styled.div``;

export default MainLayout;
