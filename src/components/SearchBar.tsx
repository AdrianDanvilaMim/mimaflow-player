import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, store} from "../redux/store";
import {changeValue, deleteData, songSlice, submitData} from "../redux/songSlice";
import React, {EffectCallback, useEffect, useState} from "react";
import  ExceptionDetails from "console"


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
                        "Authorization": "Bearer pon el tuyo"
                    }
                })
                const json = await response.json()
                return json
            }catch (e){
                console.log(e)
            }

        }

        const  data = await fetchData()
        console.log(data)
        const tracks = data.tracks.items
        tracks.map((element:any)=>{
            dispatch(submitData({
                name:element.name,
                artist:element.artists[0].name,
                album:element.album.name,
                img:element.album.images[0].url,
            }))

            return ""
        })

    }
    return(
        <div className={className}>
            <fieldset >
                <p>{store.getState().songs.song}</p>
                <legend>Search your favorites songs</legend>
                <form className={"search-form"}  onSubmit={onSubmitHandler}>
                    <input type={"text"} className={"w-90 m-5"} placeholder={"hola"} onChange={onChangeHandler}/>
                    <button type={"submit"}>Search</button>
                </form>
            </fieldset>

        </div>
    )
}
