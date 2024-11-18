import {create} from 'zustand'
import axios from 'axios'


const API_URI = "http://localhost:5000/api/auth"

axios.defaults.withCredentials = true

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isChecking: true,

    signup: async (email, password, name) => {

        set({isLoading: true, error: null});

        try {

            const response = await axios.post(`${API_URI}/signup`, {email, password, name});

            set({ user: response.data.user, isAuthenticated: true, isLoading: false});
            
        } catch (error) {
            set({ error: error.response.data.message || "Error signing up", isLoading: false });
            throw error;
        }
    },

    login: async (email, password) => {

        set({isLoading: true, error: null});

        try {

            const response = await axios.post(`${API_URI}/login`, {email, password});

            set({ user: response.data.user, isAuthenticated: true, isLoading: false});
            
        } catch (error) {
            set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
            throw error;
        }
    },

    verifyEmail: async (code)=> {

        set({ isLoading: true, error: null });

        try {

            const response = await axios.post(`${API_URI}/verify-email`, { code });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });

            return response.data
            
        } catch (error) {
            set({ error: error.response.data.message || "Error verifying email", isLoading: false });
            throw error;
        }
    },

    checkAuth: async () => {

        set({ isChecking: true, error: null });

        try {

            const response = await axios.get(`${API_URI}/check-auth`);

            set({ user: response.data.user, isAuthenticated: true, isChecking: false });
            
        } catch (error) {

            set({ error: null, isChecking: false, isAuthenticated: false });
            
        }
    }


}))