import React from 'react';

const DarkModeContext = React.createContext({
  dark: null,
  darkToggler: () => {},
});

export const DarkModeProvider = DarkModeContext.Provider;
export default DarkModeContext;
