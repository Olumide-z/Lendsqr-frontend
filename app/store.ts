import { configureStore } from '@reduxjs/toolkit';
import userReducers from '@/features/userSlice';
const store = configureStore({
    reducer: {
        user: userReducers,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;