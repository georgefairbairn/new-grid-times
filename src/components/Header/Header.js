import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import Spacer from "../Spacer";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <MobileActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </MobileActionGroup>
          <MobileActionGroup>
            <button>
              <User size={24} />
            </button>
          </MobileActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <Spacer size={30} />
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <LinkButton>Already a subscriber?</LinkButton>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
  }
`;

const MobileActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const LinkButton = styled.button`
  font-style: italic;
  text-decoration: underline;
  text-align: center;
  color: var(--color-gray-900);
`;

export default Header;
