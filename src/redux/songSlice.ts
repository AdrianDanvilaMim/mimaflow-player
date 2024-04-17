import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SongState {
    song?:string
    actualSong:string
    data:Array<any>
}

// Define the initial state using that type
const initialState: SongState = {
    song:"",
    actualSong:"",
    data:[]
}

type SetTodoPayload = { name: string,album:string,artist:string,img:string,actualSong:string};

export const songSlice =createSlice({
    name:"songReducer",
    initialState:initialState,
    reducers:{
        changeValue(state,action:PayloadAction<any>){
           state.song = action.payload
        },
        submitData(state, {payload}:PayloadAction<SetTodoPayload>){
            console.log(payload.actualSong)

            state.data.push(payload)
        },
        deleteData(state){
            state.data=[]
        },
        changeSongReproducer(state,action:PayloadAction<string>){
            state.actualSong=action.payload
        }
    },

})

export const {changeValue,submitData
    ,deleteData,changeSongReproducer} = songSlice.actions