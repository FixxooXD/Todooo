import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: [],
  todos: [],
  isLoading: false,
  isError: null,
  isAuthenticated: false,
  isSuccess: false,
  successMSG: null,
};

export const AddUser = createAsyncThunk(
  "AddUser",
  async ({ userName, password }) => {
    try {
      console.log(userName, password);

      const response = await axios.post(
        "https://todoos-server.onrender.com/auth",
        {
          // const response = await axios.post("http://localhost:3000/auth", {
          userName: userName,
          userPassword: password,
          Todos: [0],
        }
      );
      if (!response.data) {
        return rejectWithValue("No user found");
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ userName, password }) => {
    console.log(userName, password);
    try {
      const response = await axios.post(
        "https://todoos-server.onrender.com/auth/login",
        {
          // const response = await axios.post("http://localhost:3000/auth/login", {
          userName: userName,
          userPassword: password,
          Todo: [0],
        }
      );
      if (!response.data) {
        return rejectWithValue("No user found");
      }
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const AddTask = createAsyncThunk("AddTask", async ({ user, task }) => {
  try {
    console.log(user.userName, task);
    const response = await axios.put(
      "https://todoos-server.onrender.com/todos",
      {
        // const response = await axios.put("http://localhost:3000/todos", {
        userName: user.userName,
        task: task,
      }
    );
    if (!response.data) {
      return rejectWithValue("No user found");
    }
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const UpdateTask = createAsyncThunk(
  "UpdateTask",
  async ({ todoId, updatedTask }) => {
    try {
      console.log(todoId, updatedTask);
      const response = await axios.put(
        "https://todoos-server.onrender.com/todos",
        {
          // const response = await axios.patch("http://localhost:3000/todos", {
          id: todoId,
          task: updatedTask,
        }
      );
      if (!response.data) {
        return rejectWithValue("No user found");
      }
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const DeleteTask = createAsyncThunk(
  "DeleteTask",
  async ({ userId, taskId }) => {
    try {
      console.log(userId, taskId);
      const response = await axios.put(
        "https://todoos-server.onrender.com/todos",
        {
          // const response = await axios.delete("http://localhost:3000/todos", {
          data: {
            id: userId,
            taskId: taskId,
          },
        }
      );
      if (!response.data) {
        return rejectWithValue("No user found");
      }
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const todoSlice = createSlice({
  name: "TodoSlice",
  initialState,
  reducers: {
    logOut: (state, actions) => {
      state.isAuthenticated = false;
    },
    editTask: (state, actions) => {
      let data = actions.payload;
      let editTaskId = data.id;
      let editTask = data.task;
      state.todos = state.todos.map((todo) =>
        todo._id === editTaskId ? { ...todo, isEditing: true } : todo
      );
    },
  },
  extraReducers: (builder) => {
    // if AddUser request is Pending
    builder.addCase(AddUser.pending, (state, actions) => {
      state.isLoading = true;
      console.log("pending");
    });

    //Request AddUser Fulfilled
    builder.addCase(AddUser.fulfilled, (state, actions) => {
      // if Gotten a error I'll get a Message in the payload
      if (actions.payload.message) {
        state.isLoading = false;
        state.isError = "User Alredy Exists";
        state.successMSG = "null";
        console.log("error");
      }
      //Else
      else {
        state.isLoading = false;
        state.isError = null;
        state.isSuccess = true;
        state.successMSG = "Sign up Successful!!";
      }
    });

    // Login
    builder.addCase(loginUser.pending, (state, actions) => {
      state.isLoading = true;
      // state.users.userData.push(actions.payload)
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      if (actions.payload.error) {
        state.isLoading = false;
        state.isError = "User Not Found or signup baby if not";
      } else {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = null;
        state.isAuthenticated = true;
        state.successMSG = "Sign up Successful!!";
        state.userData.push(actions.payload);
        let todo = actions.payload.todo;
        state.todos = todo;
        // console.log(actions.payload);
      }
      // state.users.userData.push(actions.payload)
    });

    builder.addCase(AddTask.pending, (state, actions) => {
      state.isLoading = true;
      state.isSuccess = false;
      console.log("Loading");
    });

    builder.addCase(AddTask.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.isSuccess = true;
      let data = actions.payload;
      let userTodos = data.todo;
      state.todos = [...userTodos];
      console.log(userTodos);
    });

    builder.addCase(UpdateTask.pending, (state, actions) => {
      state.isSuccess = false;
    });

    builder.addCase(UpdateTask.fulfilled, (state, actions) => {
      state.isSuccess = true;
      let data = actions.payload;
      let userTodos = data.todo;
      state.todos = [...userTodos];
      console.log(actions.payload);
    });

    builder.addCase(DeleteTask.pending, (state, actions) => {
      state.isSuccess = false;
    });

    builder.addCase(DeleteTask.fulfilled, (state, actions) => {
      // console.log(actions.payload);
      state.isSuccess = true;
      let data = actions.payload;
      console.log(data);
      let userTodos = data.todo;
      state.todos = [...userTodos];
      console.log(actions.payload);
    });
  },
});

export const { logOut, editTask } = todoSlice.actions;
export default todoSlice.reducer;
