import React, { useState, useContext, useRef, useEffect } from 'react'
import styles from './Input.module.css'
import AuthContext from '../Store/auth-context';


const Input = () => {

    const fnc = useContext(AuthContext) //get math functions

    const [inputsData, changeInputData] = useState(() => {
        let inputDataFromLocalStorage = []
        Object.keys(localStorage).sort().filter(key => key.includes('toolBoxInput')).map((inputId) => {
            inputDataFromLocalStorage.push(localStorage[inputId])
        })
        return inputDataFromLocalStorage
    }); //get inputs data from local storage

    const [onFocusedInput, changeFocusedInput] = useState(0);
    const textarea = useRef(null)

    useEffect(() => {
        if (localStorage[`toolBoxInput${onFocusedInput}`] !== undefined) 
            localStorage[`toolBoxInput${onFocusedInput}`] = inputsData[onFocusedInput]
        else localStorage.removeItem(`toolBoxInput${onFocusedInput}`) //removing input
    }, [inputsData]) //update localStorage data with every input changes

    const changeInputCountHandler = event => {
        if (event.target.id === 'add') {
            changeInputData(prev => [...prev, '']);
            changeFocusedInput(inputsData.length);
            textarea.current.focus()
        }
        else if (event.target.id === 'remove' && inputsData.length > 1) {
            let inputDataCopy = [...inputsData];
            inputDataCopy.splice(onFocusedInput, 1);
            changeInputData([...inputDataCopy]);
            changeFocusedInput(prev=>{
                if(prev==0) return 0
                else return (prev-1)
        })}
        else if (event.target.id === 'removeEmpty' && inputsData.length > 1) {
            changeInputData([...inputsData.filter(input=>input!=='')]);
            changeFocusedInput(0)
        }
        else if (event.target.id === 'removeAll' && inputsData.length > 1) {
            changeInputData([inputsData[onFocusedInput]]);
            changeFocusedInput(0)
        }
    }

    const clearInput = () => {
        changeInputData(prev => {
            prev[onFocusedInput] = '';
            textarea.current.value = ''
            return [...prev]
        })
    }

    const copyInput = () => {
        var copyText = document.getElementById("textarea");
        copyText.select()  // Select the text field 
        navigator.clipboard.writeText(copyText.value)
    }

    let opacity
    inputsData.length > 1 ? opacity = 1 : opacity = 0.55
    return (
        <>
            <div className={styles.inputDiv}>
                <button id='add' onClick={changeInputCountHandler} > Add input</button>
                <button style={{ opacity: opacity }} id='remove' onClick={changeInputCountHandler}> Remove input </button>
                <button style={{ opacity: opacity }} id='removeEmpty' onClick={changeInputCountHandler}> Remove empty </button>
                <button style={{ opacity: opacity }} id='removeAll' onClick={changeInputCountHandler}> Remove all </button>
                <br />
                {inputsData.map((input, id) => {
                    return (
                        <div key={id}>
                            <input className={`${styles.dataInput} ${onFocusedInput === id && styles.focusedInput}`}
                                id={id}
                                type='text'
                                value={input}
                                onClick={event => {
                                    textarea.current.focus()
                                    textarea.current.value = event.target.value
                                    changeFocusedInput(id)
                                }
                            } readOnly/>
                        </div>
                    )
                })}
            </div>
            <div className={styles.showInput}>
                <textarea
                    id='textarea'
                    placeholder={`${fnc.randNumber(1, 99)}, ${fnc.randNumber(1, 99)}, ${fnc.randText()}, ${fnc.randNumber(1, 99)}...`}
                    onChange={() => {
                        changeInputData(prev => {
                            prev[onFocusedInput] = textarea.current.value
                            return [...prev]
                        })
                    }}
                    ref={textarea}
                    value={inputsData[onFocusedInput]} />
            </div>
            <button onClick={clearInput} > Clear </button>
            <button onClick={copyInput} > Copy </button>
        </>
    )
}

export default Input