import Button from "./Button";
const Navbar=({loginId,handleClick}:{loginId:string,handleClick:(e: React.MouseEvent<HTMLButtonElement>)=>void})=>{
    return(
        <div className="flex justify-end sticky-top-0 mb-4 px-16 py-8">
            <Button handleClick={handleClick} textInside={"LogOut"} loginId={loginId} submit={false}/>
        </div>
    )
}

export default Navbar;