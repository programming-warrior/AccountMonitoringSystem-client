
const Card=({deviceName}:{deviceName:String})=>{

    return(
      <div className="flex items-center">
        <span className="pr-2">
            {deviceName.includes('Android')?<svg width="32" height="32" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="18" y="8" width="28" height="48" rx="4"></rect><line x1="28" y1="12" x2="36" y2="12"></line><line x1="30" y1="52" x2="34" y2="52"></line></g></svg>:<svg fill="#000000" width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pc</title> <path d="M1.844 5.281h18.688c1.031 0 1.875 0.813 1.875 1.844v11.938c0 1.031-0.844 1.906-1.875 1.906h-7.281v3.094h5.313c0.781 0 0.844 2.563 0.938 2.656h-16.594s0-2.656 0.938-2.656h5.313v-3.094h-7.313c-1.031 0-1.844-0.875-1.844-1.906v-11.938c0-1.031 0.813-1.844 1.844-1.844zM1.844 19.063h18.688v-11.938h-18.688v11.938z"></path> </g></svg>}
        </span>
        <span className="capitalize">
            {deviceName}
        </span>
      </div>
    )
}
export default Card;