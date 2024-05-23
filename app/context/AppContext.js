import React, { useEffect } from "react";
import { storageService } from "../services/storage";

const AppContext = React.createContext();

const initialState = {
  preferences: {
    reminderTime: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PREFERENCES":
      return {
        ...state,
        preferences: action.payload,
      };
    default:
      return state;
  }
};

export function updateReminderTime(reminderTime) {
  return {
    type: "UPDATE_PREFERENCES",
    payload: {
      reminderTime,
    },
  };
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    // get the reminder time from storage
    // and update the app context
    if (storageService.exists("dailyReminder")) {
      const dailyReminder = storageService.get("dailyReminder");
      dispatch(updateReminderTime(new Date(dailyReminder)));
    }
  }, []);

  return (
    <AppContext.Provider value={{ appContext: state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
