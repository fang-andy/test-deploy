import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  view: location.pathname.split('/')[1] || "home",
  user_id: '',
  first_name: '',
  full_name: '',
  role: '',
  active: true,
  modules: [],
  connections: [],
  photo: [],
  tasks: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeView: (state, action) => {
      state.view = action.payload
    },
    updateUser: (state, action) => {
      // console.log('payload: ', action.payload)
      state.user_id = action.payload.user_id;
      state.modules = action.payload.modules;
      state.first_name = action.payload.first_name;
      state.role = action.payload.role;
      state.connections = action.payload.connections;
      state.photo = action.payload.photo;
      state.tasks = action.payload.tasks;
      state.full_name = action.payload.full_name;
    },
    updateConnection: (state, action) => {
      // console.log('action payload: ', action.payload)
      state.connectionFiltered = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeView, updateUser, updateConnection } = userSlice.actions

export default userSlice.reducer