import React, { useEffect } from "react";
import { storageService } from "../services/storage";
import trackingService from "../services/tracking";

const AppContext = React.createContext();

const initialState = {
  preferences: {
    reminderTime: null,
  },
  activity: {
    completedWorkouts: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PREFERENCES":
      return {
        ...state,
        preferences: action.payload,
      };
    case "ADD_COMPLETED_WORKOUT":
      return {
        ...state,
        activity: {
          ...state.activity,
          completedWorkouts: [
            ...state.activity.completedWorkouts,
            action.payload,
          ],
        },
      };
    case "LOAD_COMPLETED_WORKOUTS":
      return {
        ...state,
        activity: {
          ...state.activity,
          completedWorkouts: action.payload,
        },
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

export function loadWorkouts(workouts) {
  return {
    type: "LOAD_COMPLETED_WORKOUTS",
    payload: workouts,
  };
}

export function addWorkout(workout) {
  return {
    type: "ADD_COMPLETED_WORKOUT",
    payload: workout,
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

    // get the completed workouts from storage
    // and update the app context
    let workouts = trackingService.getAllCompletedWorkouts();
    dispatch(loadWorkouts(workouts));
    
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
