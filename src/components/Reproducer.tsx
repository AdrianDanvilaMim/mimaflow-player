import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

export  const  Reproducer =({className}:{className:string})=>{
    const songSrc = useSelector((state: RootState) => state.songs.actualSong)

    return(
        <div className={className}>
            <audio src={songSrc} controls/>
        </div>
    )
}