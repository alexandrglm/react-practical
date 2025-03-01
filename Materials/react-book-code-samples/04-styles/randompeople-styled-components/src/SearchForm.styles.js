import styled, { css } from 'styled-components';

const formColor = 'white';
const fieldBorderColor = '#DADDEC';
const fieldTextColor = '#656880';
const focusedField = 'olive';

const formFieldElementStyles = css`
    border: 2px solid ${fieldBorderColor};
    margin: 5px 0 10px;
    font-size: 1rem;
    color: ${fieldTextColor};
`;

export const SearchForm=styled.div`
    margin: 0 auto;
    max-width: 400px;
    box-sizing: border-box;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 2px;
    padding: 0.5em;
    background-color: ${formColor};
`;

export const FormField = styled.div`
    font-size: 10pt;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;
`;

export const SelectField = styled.select`
    ${formFieldElementStyles}
`;

export const InputField = styled.input`
    ${formFieldElementStyles}
    &:focus {
        color: ${focusedField};
      }
`;