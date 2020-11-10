import { css } from 'styled-components';
import theme from './theme';

export const ResultStyle = css`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1.5rem;
  padding: 1rem;
  cursor: pointer;

  transition: transform 0.15s ease;
  :hover {
    background: ${theme.colors.primary};
    transform: scale(1.04);
  }
`;
export const ResultImgStyle = css`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  background: url(${props => props.img}) no-repeat center center/cover;
`;

export const RestultNameStyle = css`
  font-size: 1rem;
  color: ${theme.colors.light};
  /* name overflow */
  max-width: 220px;
  overflow-wrap: break-word;
`;