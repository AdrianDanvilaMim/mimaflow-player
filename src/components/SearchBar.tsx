import {useDispatch} from "react-redux";
import {AppDispatch, store} from "../redux/store";
import {changeValue, deleteData, submitData} from "../redux/songSlice";
import React from "react";


export const SearchBar=({className}:{className:string})=>{
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        event.preventDefault()
        dispatch(changeValue(event.currentTarget.value))
    }

    const onSubmitHandler:React.FormEventHandler=async (event) => {
        event.preventDefault()
        dispatch(deleteData())
        console.log('submit ' + store.getState().songs.song)
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.spotify.com/v1/search?q=name:' " + store.getState().songs.song + "'&type=track&limit=10", {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer pon el tuyo/a ver como hago esto"
                    }
                })
                return await response.json()
            }catch (e){
                return  e
            }
        }

        await fetchData().then(
            (data)=>{
                console.log(data)
                const tracks = data.tracks.items
                tracks.map((element:any)=>{
                    dispatch(submitData({
                        name:element.name,
                        artist:element.artists[0].name,
                        album:element.album.name,
                        img:element.album.images[0].url,
                        actualSong:element.preview_url,
                    }))
                    return ""
                })
            }
        ).catch((e)=>{console.log(e)})
    }
    return(
        <div className={className}>
            <fieldset >
                <legend>Search your favorites songs</legend>
                <form className={"search-form"}  onSubmit={onSubmitHandler}>
                    <input type={"text"} className={"w-90 m-5"} placeholder={"hola"} onChange={onChangeHandler}/>
                    <button type={"submit"}>Search</button>
                </form>
            </fieldset>
        </div>
    )
}
