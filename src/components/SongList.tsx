import {SongCard} from "./SongCard";
import React from "react";
import {RootState} from "../redux/store";
import {useSelector} from "react-redux";

export const SongList = ({className}:{className:string})=>{


    const songs = useSelector((state: RootState) => state.songs.data)
    console.log(songs)
    console.log('rerender list '+ songs)

    return(
        <div className={className}>
            <div className={"songs-headers"}>
                <div></div>
                <div><b>Song</b></div>
                <div><b>Album</b></div>
                <div><b>Artist</b></div>
                <div></div>
            </div>
            <div className={"Song-cards-container"}>
                {/*get with useEffect the data from de spotify api , then map the data in json format and
                show the first 10 songs with SongCard component
                */}
                {
                    songs.map((element)=>{
                        return(
                            <SongCard song={element}></SongCard>

                        )
                    })
                }
            </div>
        </div>
    )
}

