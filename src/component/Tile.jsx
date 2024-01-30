export default function Tile({className,value,onClick,playerturn}){
    let hoverClass=null;
    if(value==null && playerturn!=null){
        hoverClass=`${playerturn.toLowerCase()}-hover`
    }
    return(
        
            <div onClick={onClick} className={`tile ${className} ${hoverClass}`}> {value}</div>
       
    )
}