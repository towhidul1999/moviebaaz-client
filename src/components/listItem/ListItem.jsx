import React, {useState} from 'react';
import './listItem.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/embed/uTrCgrA034A?controls=0";

    return (
        <div className='listItem'
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={ () => setIsHovered(true)} 
        onMouseLeave={ () => setIsHovered(false)}
        >

            <img src='https://www.themoviedb.org/t/p/w780/hVo9Gr69bDqTjZ4vEEo646TYhjm.jpg' alt=''/>

            {isHovered && (

        <>    
            {/* <video src={trailer} autoPlay={true} loop/> */}
            <iframe src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon className="icon"/>
                    <AddIcon className="icon"/>
                    <ThumbUpAltOutlinedIcon className="icon"/>
                    <ThumbDownOutlinedIcon className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </div>
                <div className="genre">Action</div>
            </div>
        </>
            )};
        </div>
    )
}
