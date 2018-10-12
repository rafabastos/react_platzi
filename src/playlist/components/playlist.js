import React from 'react';
import Media from './media';
import './playlist.css';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    console.log(props.data);
    return (
        <div className="Playlist">
        <Play />
        <Pause 
            size={70}
            color="green"
        />
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;