import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import {Avatar} from "@material-ui/core";
import { useStateValue } from './StateProvider';



function Header() {

    // pull the user information
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            {/* Header is split into 3 areas : center, left & right */}
            
            <div className="header_left">
                <img src = {require('./logo.png')} alt=""/>

                <div className="header_input">
                    <img
                    src={require('./logo2.png')}
                    alt=""
                    />
                </div>
            </div>

            
            <div className="header_center">
                <div className="header_option">
                    <img
                    src={require('./ryv.png')}
                    alt=""
                    />
                </div>

            </div>


            <div className="header_right">

                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

            </div>


            
        </div>
    )
}

export default Header
