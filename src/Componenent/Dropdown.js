import React, { useState,useEffect,useRef } from "react";

const Dropdown = ({options,selected,onSelectedChange,label}) =>{
    const [open,setOpen]=useState(false)
    const ref=useRef();
    useEffect(()=>{
        const onBodyClick=(event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
                setOpen(false);
            };
        document.body.addEventListener('click',onBodyClick,{capture:true})
        
        return () => {
            document.body.removeEventListener('click',onBodyClick,{
                capture:true
            });
        };
    },[])

    const renderedOptions = options.map((option)=>{
        if(option.value===selected.value){
            return null;
        }
        return(
            <div key={option.value} className="item" onClick={()=>{onSelectedChange(option)}}>
                {option.label}
            </div>
        )
    })
    
    
    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={open==false ? "ui selection dropdown" : "ui selection dropdown visible active"} onClick={()=>{setOpen(!open)}}>
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                        <div className={open==false ? "menu" : "menu visible transition"}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
            <span style={{color:`${selected.value}`}}>This text is written in {selected.value} color</span>
        </div>
    )
};

export default Dropdown;