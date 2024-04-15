import {SongCard} from "./SongCard";
import {useState} from "react";

export const SongList =({className}:{className:string})=>{
    const [squares, setSquares] = useState(Array.from(Array(9).keys()));

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
                    squares.map(()=>{
                        return(
                            <SongCard></SongCard>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}