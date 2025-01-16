import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  sidebarOpen: boolean;
  sidebarExpanded: boolean;
}

const initialState: SidebarState = {
  sidebarOpen: false,
  sidebarExpanded: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarExpanded(state, action) {
      state.sidebarExpanded = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarExpanded } = sidebarSlice.actions;
export const selectSidebarState = (state: { sidebar: SidebarState }) => state.sidebar.sidebarOpen;

export default sidebarSlice.reducer;
