import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  width: 120px;
  height: 50px;
  background-color: papayawhip;
`;

const ABox = styled(StyledView)`
  height: 120px;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

// const StyledView = styled.View`
//   background-color: papayawhip;
// `;

export default class Box extends React.Component {
  render() {
    return (
      <ABox>
        <StyledText>2222</StyledText>
      </ABox>
    );
  }
}
