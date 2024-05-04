
import CardHeader from "./CardHeader";
import Button from "./Button";
import TimeFormatter from "./TimeFormatter";

const Card=({deviceName,time,current,loginId,handleClick}:{deviceName:String,time:String,current:boolean,loginId:string,handleClick:(e: React.MouseEvent<HTMLButtonElement>)=>void})=>{

    const handleSubmit=()=>{

    }
    return(
        <div className="bg-white  border border-gray-600 rounded  py-4 px-2 m-4">
            <div className="flex justify-between items-center py-2">
                <CardHeader deviceName={deviceName}/>
                {
                    !current?<Button handleClick={handleClick} loginId={loginId} textInside={"Sign Out"} submit={false}/>:<p>Current Device</p>
                }
         
            </div>
            <div className="py-2">
                <TimeFormatter time={time}/>
            </div>
        </div>
    )
}
export default Card;