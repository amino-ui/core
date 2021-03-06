import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.span`
  opacity: 0.7;
  font-style: italic;
`;

const SmallHeader = styled.span`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.5;
`;

const InputLabel = styled.label`
  font-family: var(--amino-font-sans);
  margin-bottom: var(--amino-space-quarter);
  display: block;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.6;
`;

type TextStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'code'
  | 'subtitle'
  | 'smallheader'
  | 'inputlabel';

export type TextProps = {
  children: React.ReactNode;
  title?: string;
  type?: TextStyle;
};

export const Text: React.FC<TextProps> = ({ children, title, type }) => {
  switch (type) {
    case 'h1':
      return <h1 title={title}>{children}</h1>;
    case 'h2':
      return <h2 title={title}>{children}</h2>;
    case 'h3':
      return <h3 title={title}>{children}</h3>;
    case 'h4':
      return <h4 title={title}>{children}</h4>;
    case 'h5':
      return <h5 title={title}>{children}</h5>;
    case 'h6':
      return <h6 title={title}>{children}</h6>;
    case 'subtitle':
      return <Subtitle title={title}>{children}</Subtitle>;
    case 'smallheader':
      return <SmallHeader title={title}>{children}</SmallHeader>;
    case 'inputlabel':
      return <InputLabel title={title}>{children}</InputLabel>;
    case 'p':
    default:
      return <p title={title}>{children}</p>;
  }
};
