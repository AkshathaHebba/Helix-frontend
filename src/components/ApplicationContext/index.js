import {createContext, useState} from "react";

const ApplicationContext = createContext({});

export const ApplicationContextProvider = ({children}) =>{
    const [show,setShow] = useState(false)
    const [isDisabled,setIsDisabled] = useState(true)
    const askingQuestion = () => {
        setShow(flag => !flag);
    }
    const makePostAvail = () =>{
        setIsDisabled(false)
    }
    return (
        <ApplicationContext.Provider value={{ //Any state or function we use will be passed here as value
            show,
            isDisabled,
            makePostAvail,
            askingQuestion,
        }}>
            {children}
        </ApplicationContext.Provider>
    )
}
export default ApplicationContext