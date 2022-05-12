import React from "react";
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import {IconButton} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import { withRouter} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({ backButton }) {
    const history = useHistory();
    return (
        // BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize={"large"} className={"header__icon"} />
                </IconButton>
                ): (
                <IconButton>
                    <PersonIcon className={"header__icon"} fontSize="large" />
                </IconButton>
                )}


            <Link to="/">
                <img
                    className="header__logo"
                    src="logo192.png"
                    alt="react logo"
                />
            </Link>

            <Link to="/chat" >
                <IconButton>
                    <ForumIcon className={"header__icon"} fontSize={"large"} />
                </IconButton>
            </Link>

        </div>
    );
}

// export default withRouter(Header);
export default Header;