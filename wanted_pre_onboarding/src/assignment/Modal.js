import React, { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [state, setState] = useState(false);

  const onModal = () => {
    if (!state) {
      setState(true);
    }
  };

  const closeModal = () => {
    if (state) {
      setState(false);
    }
  };

  return (
    <Wrap bg={state}>
      <h3 style={{ margin: "0" }}>Modal</h3>
      <Container>
        <Open onClick={onModal}>Open Modal</Open>
        {state && (
          <Modal_Area>
            <p style={{ margin: "0", cursor: "pointer" }} onClick={closeModal}>
              x
            </p>
            <p
              style={{ fontSize: "15px", padding: "10px 0", color: "#6c04d4" }}
            >
              Hello CODESTATES!
            </p>
          </Modal_Area>
        )}
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
  background-color: ${(props) => props.bg && "rgba(0,0,0,.5)"};
`;

const Container = styled.div`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Open = styled.button`
  padding: 17px;
  background-color: #6c04d4;
  border-radius: 40px;
  border: none;
  color: #fff;
  cursor: grab;
`;

const Modal_Area = styled.div`
  width: 30%;
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 7px;
  text-align: center;
  font-weight: 700;

  position: absolute;
`;

export default Modal;
