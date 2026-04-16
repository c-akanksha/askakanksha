import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const checkBackendStatus = createAsyncThunk(
  "chat/checkBackendStatus",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}`);
      if (!res.ok) throw new Error("Backend not reachable");

      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const sendMessageAsync = createAsyncThunk(
  "chat/sendMessage",
  async (message, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");

      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const initialState = {
  messages: [],
  loading: false,
  backendStatus: "idle", // idle | loading | success | error
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({
        text: action.payload,
        sender: "user",
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkBackendStatus.pending, (state) => {
        state.backendStatus = "loading";
      })
      .addCase(checkBackendStatus.fulfilled, (state) => {
        state.backendStatus = "success";
      })
      .addCase(checkBackendStatus.rejected, (state, action) => {
        state.backendStatus = "error";
        state.error = action.payload;
      })
      .addCase(sendMessageAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessageAsync.fulfilled, (state, action) => {
        state.loading = false;
        const parsed = JSON.parse(action.payload.answer);
        state.messages.push({
          type: parsed.type,
          data: parsed.data,
          text: parsed.type === "text" ? parsed.data : "",
          sender: "bot",
        });
      })
      .addCase(sendMessageAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        state.messages.push({
          text: "Something went wrong. Please try again.",
          sender: "bot",
        });
      });
  },
});

export const { addUserMessage } = chatSlice.actions;
export default chatSlice.reducer;
