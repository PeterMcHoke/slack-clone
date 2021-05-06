import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <HeaderContainer> 
            {/* {Header Left} */}
            <HeaderLeft>
                <HeaderAvatar 
                    //TODO Add onClick
                    //TODO Add src from user photo
                />
                <AccessTimeIcon />
            </HeaderLeft>
            {/* {Header Center} */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderSearch>

            {/* {Header Right} */}
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
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled(Avatar)`
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
    padding: 0px 50px;
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

`a