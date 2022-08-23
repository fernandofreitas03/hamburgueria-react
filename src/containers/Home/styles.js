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
  margin-top: 22px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;

  line-height: 33px;
  text-align: center;

  margin-bottom: 76px;
  color: #ffffff;
`;

export const InputLabel = styled.p`
  padding-left: 19px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: -0.408px;

  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  outline: none;
  border: none;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 21px;

  margin-bottom: 42px;
  padding-left: 15px;

  color: #ffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;

  margin-top: 76px;
  display: flex;

  background: #d93856;

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


