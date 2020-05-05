import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: var(--amino-sidebar-width) 1fr;
  grid-column-gap: var(--amino-space);
`;

const ContentGrid = styled(Grid)`
  height: 100%;
`;

const AminoLayout = styled.main`
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  background: white;
  z-index: 2;
  height: var(--amino-appbar-height);
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(16, 42, 67, 0.1),
    0 1px 2px 0 rgba(16, 42, 67, 0.06);
  transform: translateZ(0);
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  height: var(--amino-appbar-height);
`;

const Brand = styled.div`
  width: var(--amino-sidebar-width);
  border-right: 1px solid var(--amino-border-color);
  height: var(--amino-appbar-height);
  padding: 0 var(--amino-space);
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;

  img,
  svg {
    width: 120px;
    height: 100%;
  }
`;

const Sidebar = styled.nav`
  border-right: 1px solid var(--amino-border-color);
  height: 100%;
  padding: var(--amino-space);
  width: var(--amino-sidebar-width);
  box-sizing: border-box;
`;

const Content = styled.div`
  overflow-y: auto;
  padding-top: var(--amino-space);
  padding-bottom: var(--amino-space);
  padding-left: var(--amino-space);
  margin-left: var(--amino-space-negative);
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  max-width: calc(
    var(--amino-container-width) -
      (var(--amino-sidebar-width) + var(--amino-space))
  );
`;

type Props = {
  header: any;
  sidebar: any;
  brand: any;
  content: any;
};

export const Layout: React.FC<Props> = ({
  content,
  header,
  sidebar,
  brand
}) => {
  return (
    <AminoLayout>
      <Header>
        <Grid>
          <Brand>{brand}</Brand>
          <HeaderContent>{header}</HeaderContent>
        </Grid>
      </Header>

      <ContentGrid>
        <Sidebar>{sidebar}</Sidebar>
        <Content>
          <Wrapper>{content}</Wrapper>
        </Content>
      </ContentGrid>
    </AminoLayout>
  );
};
