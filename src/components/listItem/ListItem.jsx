import React from 'react';
import './listItem.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

export default function ListItem() {
    return (
        <div className='listItem'>
            <img src='https://www.themoviedb.org/t/p/w780/hVo9Gr69bDqTjZ4vEEo646TYhjm.jpg' alt=''/>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon/>
                    <AddIcon/>
                    <ThumbUpAltOutlinedIcon/>
                    <ThumbDownOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}
