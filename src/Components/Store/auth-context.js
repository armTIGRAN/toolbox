import React from "react";

const AuthContext = React.createContext({
    randNumber: (min, max) => {},
    randText: ()=>{}
})

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomText = () => {
    const words = ["casualty", "drift","tell","conception","ball","camera", "mill","offensive","black","oh","engagement","warn","link",
                    "material","snack","average","agile","relation","free","studio","indoor","prediction","distribute",
                    "wall","entertain","sustain","throat","marsh","save"]
    return words[getRandomNumber(0, words.length-1)]
}


export const AuthContextProvider = (props) => {

    return <AuthContext.Provider value={{
        randNumber: getRandomNumber,
        randText: getRandomText
    }}> {props.children} </AuthContext.Provider>
}

export default AuthContext