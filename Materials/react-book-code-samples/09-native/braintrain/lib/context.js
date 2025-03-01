import { createContext } from "react";
const profile = {
    name: 'default',
  };

export const contextValue = {
    profile,
    setProfileName: (name ) => {
        profile.name = name
        console.log('Profile name saved: ', profile.name)
    },
};


export const BrainTrainContext = createContext({});