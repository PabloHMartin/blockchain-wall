import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DTOMessage } from "../models/DTOMessage";

interface WallState {
    messages: DTOMessage[]
}

const initialState: WallState = { 
    messages: []
}

const wallSlice = createSlice({
    name: 'wall',
    initialState,
    reducers: {
        getAll(state) {},
        setMessages(state, action: PayloadAction<DTOMessage[]>){
            state.messages = action.payload;
        },
        addOne(state, action: PayloadAction<{msg: string, date: number}>) {
            console.log(action.payload);
        },
    }
})

export const { getAll, setMessages, addOne } = wallSlice.actions;
export default wallSlice.reducer;