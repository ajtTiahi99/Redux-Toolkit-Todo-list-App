import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/TaskSlice";

export default configureStore ({
    reducer:{
        tasks:taskSlice,
    },
})