import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <HeaderContainer> 
            <HeaderLeft>
                <HeaderAvatar 
                    //TODO Add onClick
                    //TODO Add src from user photo
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between; 
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    > .MuiSvgIcon-root {
        margin-left: 30px;
        margin-right: auto;
    }
`

const HeaderAvatar = styled(AccountCircleIcon)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center; 
    padding: 2px 50px;
    color: gray;
    border: 1px gray solid;

    >input {
        background-color: transparent;
        border: none;
        min-width: 30vw;
        text-align: left;
        outline: 0;
        color: white; 
    }
`

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;
    
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }

`