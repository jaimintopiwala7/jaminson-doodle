import React,{useState} from "react";
import Accordion from "./Componenent/Accordion";
import Search from "./Componenent/Search";
import Dropdown from "./Componenent/Dropdown";
import Translate from "./Componenent/Translate";
import Route from "./Componenent/Route";
import Header from "./Componenent/Header";

const items=[
    {
        title:'what is react',
        content:'front end library'
    },
    {
        title:'why react',
        content:'very famous among developers'
    }
];

const options=[
    {
        label:'cerry red',
        value:'red'
    },
    {
        label:'lavish green',
        value:'green'
    },
    {
        label:'metalic grey',
        value:'grey'
    }
]

export default()=>{
    const [selected,setSelected]=useState(options[0])
    return(
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search"> 
                <Search />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} label='select a color' selected={selected} onSelectedChange={setSelected}/>
            </Route>
        </div>
    )
};
