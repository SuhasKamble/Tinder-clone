import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>

            <ReplayIcon  className="swipeButton__replay" fontSize="large"/>
            </IconButton>
            <IconButton>

            <CloseIcon fontSize="large" className="swipeButton__close"/>
            </IconButton>
            <IconButton>

            <StarRateIcon  className="swipeButton__star" fontSize="large"/>
            </IconButton>
            <IconButton>

            <FavoriteIcon  className="swipeButton__fav" fontSize="large"/>
            </IconButton>
            <IconButton>
            <FlashOnIcon  className="swipeButton__flash" fontSize="large"/>

            </IconButton>
        </div>
    )
}

export default SwipeButtons
