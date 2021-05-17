/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import Result from "./components/Result";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import Operations from "./components/Operations";
import "./styles.css";

export default () => {
    const [stack, setStack] = useState("");
    const items = words(stack, /[^-^+^/]+/g);
    const value = items.length > 0 ? items[items.length - 1] : "0";

    return (
        <main className="calculator">
            <Result value={value} />
            <Numbers
                onClickNumber={n => setStack(`${stack}${n}`)}
            />
            <Functions 
                onContentClear={op => setStack("")} 
                onDelete={op => {
                    if(stack.length > 0){
                        setStack(stack.substring(0, stack.length - 1));
                    }
                }} 
            />
            <Operations
                onClickOperation={op => setStack(`${stack}${op}`)} 
                onClickEquals={equal => setStack(eval(stack).toString())} 
            />
        </main>
    );
}