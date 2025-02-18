import styled from 'styled-components';

const fieldBorderColor = '#DADDEC';
const fieldTextColor = '#656880';

export const App = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const AppTitle = styled.h1`
  font-size: 30pt;
  margin: 0;
`;

export const AppSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12pt;
`;

export const AppButton = styled.div`
  margin: .5em;
  button {
    border: 2px solid ${fieldBorderColor};
    margin: 5px 0 10px;
    font-size: 1rem;
    color: ${fieldTextColor};
    cursor: pointer;
  }
`;

export const AppPeople = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 120px 120px 120px;
  align-items: center;
  justify-items: center;
  gap: 10px 5px;
`;
