import { createContext } from "react";

const context=createContext();

const authprovider=async({children})=>{
  const token=localStorage.getItem('token')
  return <context.Provider value={token}>{children}</context.Provider>
} 

export default authprovider;