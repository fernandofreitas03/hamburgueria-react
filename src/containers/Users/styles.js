import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`;

export const Image = styled.img`
  width: 342px;
  height: 354px;

  margin-top: 11px;
`;

export const Div = styled.div`
  margin-top: 36px;

  .pedidos {

    height: 250px;
    overflow-y: scroll;
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;

  line-height: 33px;
  text-align: center;

  margin-bottom: 50px;
  color: #ffffff;
`;

export const Costumes = styled.li`
  width: 342px;
  height: 101px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #ffffff40;
  border-radius: 14px;
  overflow: hidden;
  z-index: 999;

  margin-top: 17px;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    padding-right: 66px;
    padding-bottom: 35px;

    color: #ffffff;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;

  }

  button {
    width: 24px;
    height: 28px;

    background: none;
    outline: none;
    border: none;

    padding-left: 36px;
    cursor: pointer;
  }
`;

export const DivUser = styled.div`
  display: block;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;

  margin-top: 85px;
  display: flex;

  background: #ffffff24;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  cursor: pointer;

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
