import React from "react";
import Letter from "./Letter";
class Word extends React.Component{
    letterStyles=[
        {letter:"H", fontFamily:"Courier New",color:"red",fontSize:             "8rem"},
        {letter:"E", fontFamily:"Franklin Gothic Medium",color:"green",fontSize:"8rem"},
        {letter:"L", fontFamily:"Gill Sans",color:"blue",fontSize:              "8rem"},
        {letter:"L", fontFamily:"Lucida Sans",color:"magenta",fontSize:         "8rem"},
        {letter:"O", fontFamily:"Segoe UI",color:"yellow",fontSize:             "8rem"},
    ]
    render(){
        var elements=[]
        this.letterStyles.forEach(style=>{
            elements.push(<>
            <Letter
            fontFamily={style.fontFamily}
            color={style.color}
            fontSize={style.fontSize}
            >{style.letter}</Letter>    
            </>)
        })
        return(<>
        <div className="_word">{elements}</div>
        </>)
    }
} 
export default Word