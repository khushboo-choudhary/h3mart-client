function Avatar(props){
    const symbol = props.symbol.toLowerCase();
    const url = "https://assets.coincap.io/assets/icons/"+symbol+"@2x.png"

    return(
        <img src={url} alt="avt" style={{height: "30px", width:"30px", verticalAlign:"middle", margin: "5px 10px 5px 5px"}}></img>
    )
}

export default Avatar;