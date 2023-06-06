import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { UserData } from "@/types/userData"
import axios from "axios"

type InitialState = {
    users: UserData[],
    loading: boolean,
    error: string,
    userEmail: string,
    userPassword: string,
    userName: string
}

const initialState: InitialState = {
    loading: false,
    users: [],
    error: '',
    userEmail: '',
    userName: '',
    userPassword: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    return await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    .then(res => res.data);
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setEmail: (state, action) => {
        state.userEmail = action.payload
      },

      setPassword: (state, action) => {
        state.userPassword = action.payload
      },

      setUsername: (state, action) => {
        state.userName = action.payload
      },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
          state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserData[]>) => {
          state.loading = false
          state.users = action.payload
          state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false
          state.users = []
          state.error = action.error.message || 'Something went wrong'
        })
      }
})

export const { setEmail, setPassword, setUsername } = userSlice.actions;
export default userSlice.reducer