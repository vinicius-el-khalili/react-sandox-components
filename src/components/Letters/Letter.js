import React from "react";
class Letter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mode:"default",
            fontFamily:"Arial",
            color:"white",
            fontSize:"8rem"
        }
    }
    render(){
        return(<>
        <div 
        className="_letter"
        style={{
            fontFamily:this.state.fontFamily,
            color:this.state.color,
            fontSize:this.state.fontSize
        }}
        onMouseOver={()=>{
            this.setState({
                fontFamily:this.props.fontFamily,
                color:this.props.color,
                fontSize:this.props.fontSize
            })
        }}
        onMouseLeave={()=>{
            this.setState({
                fontFamily:"Arial",
                color:"white",
                fontSize:"8rem"
            })
        }}
        >{this.props.children}</div></>)
    }
} 
export default Letter