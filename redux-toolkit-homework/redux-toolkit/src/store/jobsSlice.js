import { createSlice } from "@reduxjs/toolkit";
import jobData from "../assets/data.json";



const jobSlice = createSlice({
  name: "jobsCards",
  initialState: jobData,
  reducers: {
    remove: (state, action) => {},
  },
});
export const { add } = jobSlice.actions;
export default jobSlice.reducer;
