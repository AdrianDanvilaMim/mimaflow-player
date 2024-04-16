interface SongInterface{
    song:{
        name:string,
        artist:string,
        album:string,
        img:string,
    }
}

export const   SongCard=(props:SongInterface)=>{
    return(
        <div className={"songs-details"}>
            <div>imagen con boton</div>
            <div><b>{props.song.name}</b></div>
            <div><b>{props.song.album}</b></div>
            <div><b>{props.song.artist}</b></div>
            <div className={"img-container"}><img  src={props.song.img}/></div>
        </div>
    )
}