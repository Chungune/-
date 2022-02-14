import React, { useState } from "react";
import styled from "styled-components";

const AutoComplete = () => {
  return (
    <Wrap>
      <h3 style={{ margin: "0" }}>AutoComplete</h3>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input list="autocomplete" />
        <datalist id="autocomplete">
          <option value="rustic" />
          <option value="refurbished" />
          <option value="antique" />
          <option value="중고A급" />
        </datalist>
      </div>
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

const Input = styled.input`
  width: 98%;
  height: 30px;
  outline: none;
  border-radius: 7px;
`;

export default AutoComplete;
