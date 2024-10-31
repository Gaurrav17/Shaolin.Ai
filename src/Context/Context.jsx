import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context = createContext();


const ContextProvider = (props) => {



 const [input, setInput] = useState("");
 const [recentPrompt, setRecentPrompt] = useState("");
 const [previousPrompt, setPreviousPrompt] = useState([]);
 const [showResult, setShowResult] = useState(false);
 const [loading, setLoading] = useState(false);
 const [resultData, setResultData] = useState("");



  const onSent = async (prompt) => {

          setResultData("");
          setLoading(true);
          setShowResult(true);
          const response = await run(input);
          setPreviousPrompt(prev=>[...prev, input])
          setRecentPrompt(input);
          setResultData(response);
          setLoading(false);
          setInput("");
  }

   const contextValue = {
       previousPrompt,
       setPreviousPrompt,
       onSent,
       setRecentPrompt,
       recentPrompt,
       showResult,
       loading,
       resultData,
       input,
       setInput,
       
  }

  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  )

}

export default ContextProvider;