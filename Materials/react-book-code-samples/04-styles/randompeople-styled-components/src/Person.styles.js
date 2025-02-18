import styled, { css } from 'styled-components';

const maleColor = 'lightYellow';
const femaleColor = 'white'

const personDataStyle = css`
  font-size: 10pt;
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;
`;

export const Person = styled.div`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 2px;
  padding: 0.5em;
  width: 120px;
  height: 160px;
  background-color: ${props => props.gender === 'male' ? maleColor : femaleColor};
  &:hover {
    zoom: 120%;
  }
`;

export const PersonImage = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
`;

export const PersonName = styled.div`
  ${personDataStyle}
  font-size: 10pt;
  font-weight: bold;
`;

export const PersonLocation = styled(PersonName)`
  font-size: 9pt;
  font-weight: normal;
`;