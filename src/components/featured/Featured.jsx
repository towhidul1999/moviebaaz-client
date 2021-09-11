import React from 'react';
import './featured.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function Featured({type}) {
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                        
                    </select>
                </div>
            )}
            <img 
            width='100%'
            src='https://3.bp.blogspot.com/-KymEhkvwvpg/WOrTaMWn72I/AAAAAAAAF0I/r4euWv-dBpwFnx8UswpZ5SYwtsME8F_RACLcB/s1600/Make%2Ba%2BMovie%2BPoster%2BWith%2BTexture%2BBackground%2BIn%2BPhotoshop.jpg' 
            alt=''
            />

            <div className='info'>
                <img 
                width='100%'
                src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
                alt=''
                />

                <span className='desc'>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </span>

                <div className='buttons'>
                    <button className='play'>
                        <PlayArrowIcon/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlinedIcon/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
