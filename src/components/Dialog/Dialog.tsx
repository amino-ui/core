import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { Text, TextStyle } from "../Text";

// TODO: scrollable dialog, max height, etc.
// TODO: close with keyboard shortcut?

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(55, 55, 59, .8);
  z-index: 99998;
  position: fixed;
`;

const DialogLayout = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 99999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  position: relative;
  z-index: 100000;
  background: #fff;
  width: 550px;
  border-radius: var(--amino-radius-large);
  max-height: 90vh;
  outline: none;
  box-shadow: var(--amino-shadow-large);
  overflow-y: scroll;
  //border: 1px solid var(--amino-border-color);
`;

const Header = styled.div`
  padding: var(--amino-space);
  border-bottom: 1px solid var(--amino-border-color);
  border-top-left-radius: var(--amino-radius-large);
  border-top-right-radius: var(--amino-radius-large);
  background: white;

  h4 {
    margin: 0;
  }
`;

const Footer = styled.div`
  padding: var(--amino-space);
  border-top: 1px solid var(--amino-border-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--amino-gray-lightest);
  border-bottom-left-radius: var(--amino-radius-large);
  border-bottom-right-radius: var(--amino-radius-large);

  & > div + div {
    margin-left: var(--amino-space-quarter);
  }
`;

const Content = styled.div`
  padding: var(--amino-space);
`;

type Props = {
  open: boolean;
  label?: string;
  actions?: Array<React.ReactNode>;
};

export const Dialog: React.FC<Props> = ({ open, label, actions, children }) => {
  const toggleScroll = () => document.body.classList.toggle("no-scroll");

  return (
    <>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="amino-backdrop"
        onEnter={toggleScroll}
        onExit={toggleScroll}
      >
        <Backdrop />
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="amino-dialog"
      >
        <DialogLayout>
          <Popup>
            <Header>
              <Text style={TextStyle.h4}>{label}</Text>
            </Header>
            <Content>{children}</Content>
            {actions && actions.length && (
              <Footer>
                {actions.map((action: any, index: number) => (
                  <div key={index}>{action}</div>
                ))}
              </Footer>
            )}
          </Popup>
        </DialogLayout>
      </CSSTransition>
    </>
  );
};
