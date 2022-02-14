import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const tabs = [
    { name: "Tab1", num: "ONE" },
    { name: "Tab2", num: "TWO" },
    { name: "Tab3", num: "THREE" },
  ];

  const [tapName, setTapName] = useState("Tab1");

  const changeTab = (t) => {
    setTapName(t);
  };

  return (
    <Wrap>
      <Menu>
        <h3 style={{ margin: "0" }}>Tab</h3>
        <TabBar>
          {tabs.map((t) => {
            return (
              <>
                <Tabs
                  key={t.name}
                  onClick={() => changeTab(t.name)}
                  bg={tapName === t.name}
                >
                  {t.name}
                </Tabs>
                {tapName === t.name && <Contents>Tab menu {t.num}</Contents>}
              </>
            );
          })}
        </TabBar>
      </Menu>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 700px;
  height: 300px;
  padding: 5px 0 5px 5px;
  box-sizing: border-box;
  border: 2px solid #eee;
  border-radius: 7px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TabBar = styled.div`
  width: 90%;
  height: 50px;
  background: #999;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Tabs = styled.div`
  width: calc((100% - 50px) / 3);
  padding: 14px;
  box-sizing: border-box;
  background: ${(props) => (props.bg ? "#6c04d4" : "#999")};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const Contents = styled.div`
  width: 100%;
  height: 239px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50px;
  left: 0;
`;

export default Tab;
