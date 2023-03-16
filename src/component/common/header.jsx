import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg"

import { Input } from 'antd';


const { Search } = Input;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: #263f61;
  padding: 0px 20px;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  & > div:last-child {
    gap: 40px;
    display :flex;
    
  }

`;

const StyledSearch = styled(Search)`
  .ant-input-wrapper {
    height: 100%;
  }
  .ant-input {
    height: 100%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.26);
    color: white;
    font-family: poppins;
    ::placeholder {
      color: white;
    }
  }
  .ant-btn {
    height: 100%;
  }
`;

const Header = () => {
  return (
    <Flex>
      <LogoContainer>
        <img src={logo} height="44px" />
      </LogoContainer>
      <SearchContainer>
        <div>
          <StyledSearch
            placeholder="Search Movies"
            // onSearch={onSearch}
            enterButton
            style={{ width: "275px", height: "40px" }}
          />
          <p>Logout</p>
        </div>

        
      </SearchContainer>
    </Flex>
  );
};

export default Header;








