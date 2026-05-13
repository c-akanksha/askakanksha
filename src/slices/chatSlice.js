import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const checkBackendStatus = createAsyncThunk(
  "chat/checkBackendStatus",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}`);
      if (!res.ok) throw new Error("Backend not reachable");
      return await res.json();
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: message }),
      });

      if (!res.ok) throw new Error("Failed request");

      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const initialState = {
  messages: [],
  loading: false,
  backendStatus: "idle",
  error: null,
  suggestedQuestions: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        sender: "user",
        text: action.payload,
      });
    },
  },

  extraReducers: (builder) => {
    builder

      /* backend status */
      .addCase(checkBackendStatus.pending, (state) => {
        state.backendStatus = "loading";
      })
      .addCase(checkBackendStatus.fulfilled, (state) => {
        state.backendStatus = "success";
      })
      .addCase(checkBackendStatus.rejected, (state) => {
        state.backendStatus = "error";
      })

      /* chat */
      .addCase(sendMessageAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(sendMessageAsync.fulfilled, (state, action) => {
        state.loading = false;

        const data = action.payload;
        console.log({ data });
        let blocks = data.blocks || [];

        let projectGroup = null;
        const groupedBlocks = [];

        blocks.forEach((block) => {
          if (block.type === "project_card") {
            if (!projectGroup) {
              projectGroup = {
                type: "project_card",
                title: "Projects",
                items: [],
              };
            }
            projectGroup.items.push(block.project);
          } else {
            groupedBlocks.push(block);
          }
        });

        if (projectGroup) groupedBlocks.push(projectGroup);
        state.messages.push({
          id: Date.now(),
          sender: "bot",
          intent: data.intent,
          title: data.title,
          blocks: groupedBlocks,
        });

        state.suggestedQuestions = data.suggested_questions || [];
      })

      .addCase(sendMessageAsync.rejected, (state) => {
        state.loading = false;

        state.messages.push({
          id: Date.now(),
          sender: "bot",
          blocks: [
            {
              type: "text",
              content: "Something went wrong.",
            },
          ],
        });
      });
  },
});

export const { addUserMessage } = chatSlice.actions;
export default chatSlice.reducer;
