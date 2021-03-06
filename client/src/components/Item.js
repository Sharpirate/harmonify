import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const StyledItem = styled.li`
  ${props => props.theme.rootStyle};
`;

const ItemImg = styled.div`
  ${props => props.theme.imgStyle};
`;

const ItemName = styled.p`
  ${props => props.theme.nameStyle};
`;

function Item({ item, type, img, theme, selectItem, isPlaying }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledItem isPlaying={type === 'track' && isPlaying} isAvailable={item.preview_url} onClick={() => selectItem(item, type)}>
        <ItemImg img={img} />
        <ItemName>{item.name}</ItemName>
      </StyledItem>
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    isPlaying: state.isPlaying
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectItem: (item, type) => {
      // type could either be TRACK or ARTIST
      dispatch({type: `SELECT_${type.toUpperCase()}`, item});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);