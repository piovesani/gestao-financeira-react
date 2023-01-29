import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 8px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const MonthArrow = styled.div`
    width: 50px;
    border-radius: 4px;
    border: 1px solid darkblue;
    color: darkblue;
    text-align: center;
    font-size: 35px;
    cursor: pointer;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;