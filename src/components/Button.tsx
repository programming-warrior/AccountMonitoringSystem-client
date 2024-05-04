const Button=({textInside,submit,loginId,handleClick}:{textInside:String,submit:boolean,loginId:string,handleClick:(e: React.MouseEvent<HTMLButtonElement>)=>void})=>{
    return(

        <button onClick={(e)=>{handleClick(e)}} type={submit?'submit':'button'} data-login={loginId} className="text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{textInside}</button>
    )
}

export default Button;