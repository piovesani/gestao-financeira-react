import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 4px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid darkblue;
    border-radius: 4px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid darkblue;
    border-radius: 4px;
`;
export const Button = styled.button`
    width: 100%;
    padding: 8px;
    border: 0;
    border-radius: 4px;
    background-color: darkblue;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;