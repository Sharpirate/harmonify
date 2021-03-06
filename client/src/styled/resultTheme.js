import { css } from 'styled-components';
import theme from './theme';

const ResultStyle = css`
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

const ImgStyle = css`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  background: url(${props => props.img}) no-repeat center center/cover;
`;

const NameStyle = css`
  font-size: 0.8rem;
  color: ${theme.colors.light};
  /* name overflow */
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const resultTheme = {
  rootStyle: ResultStyle,
  imgStyle: ImgStyle,
  nameStyle: NameStyle,
};

export default resultTheme;