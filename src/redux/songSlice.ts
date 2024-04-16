import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SongState {
    song?:string
    data:Array<any>
}

// Define the initial state using that type
const initialState: SongState = {
    song:"",
    data:[]

}

type SetTodoPayload = { name: string,album:string,artist:string,img:string};

export const songSlice =createSlice({
    name:"songReducer",
    initialState:initialState,
    reducers:{
        changeValue(state,action:PayloadAction<any>){
           state.song = action.payload

        }
        ,
        submitData(state, {payload}:PayloadAction<SetTodoPayload>){
            console.log(payload.img)

            state.data.push(payload)
        },

        deleteData(state){
            // const album =  action.payload
            //console.log(album.toString())
            state.data=[]
        }
    },

})

export const {changeValue,submitData,deleteData} = songSlice.actions