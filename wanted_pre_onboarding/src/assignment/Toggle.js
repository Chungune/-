import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [state, setState] = useState(false);

  const onToggle = () => {
    if (!state) {
      setState(true);
    } else {
      setState(false);
    }
  };
  console.log(state);

  return (
    <Wrap>
      <h3 style={{ margin: "0" }}>Toggle</h3>
      <Container>
        <ToggleArea onClick={onToggle} bg={state}>
          <Inner location={state} />
          <Circle location={state} />
        </ToggleArea>
        <div>
          <p style={{ fontSize: "20px" }}>
            Toggle Switch {state ? "ON" : "OFF"}
          </p>
        </div>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 700px;
  height: 300px;
  padding: 5px;
  box-sizing: border-box;
  border: 2px solid #eee;
  border-radius: 7px;
`;

const Container = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleArea = styled.div`
  width: 70px;
  padding: 5px;
  background-color: #999;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
`;

const Inner = styled.div`
  width: 80px;
  height: 35px;
  background-color: #6c04d4;

  position: absolute;
  top: 0;
  left: ${(props) => (props.location ? "0px" : "-80px")};

  transition: all 0.5s;
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fff;
  border: none;
  border-radius: 999px;
  transition: transform 0.5s;
  ${(props) => props.location && "transform: translateX(45px);"}
`;

export default Toggle;
