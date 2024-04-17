import React from "react";
import {useAppDispatch} from "../hooks/hooks";
import {changeSongReproducer} from "../redux/songSlice";


interface SongInterface{
    song:{
        name:string,
        actualSong:string,
        artist:string,
        album:string,
        img:string,
    }
}

export const   SongCard=(props:SongInterface)=>{
    const dispatch = useAppDispatch();

    const onClickHandler:React.MouseEventHandler<HTMLButtonElement> =(event)=>{
        dispatch(changeSongReproducer(event.currentTarget.value))


    }

    return(
        <div className={"songs-details"}>
            <div>
                <button onClick={onClickHandler} value={props.song.actualSong}>play</button>
            </div>
            <div><b>{props.song.name}</b></div>
            <div><b>{props.song.album}</b></div>
            <div><b>{props.song.artist}</b></div>
            <div className={"img-container"}><img alt={""} src={props.song.img}/></div>
        </div>
    )
}