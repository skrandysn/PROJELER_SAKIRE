import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";


const App = () => {
  return (
    <div>
     
      <AuthContextProvider>
        <MovieContextProvider>
        <AppRouter/>
        <ToastContainer/>
        </MovieContextProvider>        
      </AuthContextProvider>
     
      
    </div>
  );
};

export default App;