"use client";
import Card from "../../components/Card"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar";
import { use, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  interface DataType {
    _id:string,
    time: string;
    date: string;
    browser: string;
    platform: string;
  }
  // const [socket, setSocket] = useState<WebSocket | null>(null);
  const socket=useRef<WebSocket|null>(null);
  const [details,setDetails]=useState<DataType[]|null>(null);
  const router=useRouter();
  const [loginId,setLoginId]=useState<string>("");


  //fetch all the login details
  useEffect(()=>{
      (async function(){
        const userId=localStorage.getItem('userId');
        if(!userId) return router.push('/login');
        setLoginId(localStorage.getItem('loginId') || '');
        const res=await axios.get(`${process.env.NEXT_BACKEND_URL}/api/v1/fetch/${userId}`);
        setDetails(res.data);
      })()
  },[])





  useEffect(() => {
    if(socket && details){
    
      if(socket.current===null){
        const token: string = localStorage.getItem('token') || "";
        if(!token) return router.push('/login');
        const ws = new WebSocket(`${process.env.NEXT_PUBLIC_BACKEND_WS}`, ['Authorization', token]);
        socket.current=ws;
      }

      socket.current?.addEventListener('open', () => {
        socket.current?.addEventListener('message', (data) => {
          const { event, message } = JSON.parse(data.data);
          if (event == 'invalid-token') {
            socket.current?.close();
            router.push('/login');
          }
          else if (event == 'valid-token') {

          }
          else if(event==='new-login'){
        
            const {time,date,platform,browser}=message.loginDetails;
      
            const id=message.loginId;
            setDetails([...details,{_id:id,time,date,platform,browser}]);
          }
    
          else if(event==='log-yourself-out'){
            localStorage.removeItem('token');
            localStorage.removeItem('loginId');
            localStorage.removeItem('userId');
            socket.current?.close();
            router.push('/login');
          }

          else if(event=='log-device-out'){
            const {loginId}=message;
            setDetails(details.filter((d)=>{
              return d._id!==loginId
            }))
          }
        })
      });
    }

  }, [details])


  useEffect(()=>{
      console.log(details);
  },[details])


  const handleClick=useCallback((e: React.MouseEvent<HTMLButtonElement>)=>{
    const target=e.target as HTMLElement;
    const deviceLoggedId:string=target.dataset.login || '';
    const data={
      event:'sign-out',
      message:{
        loginId:deviceLoggedId
      }
    }
    socket.current?.send(JSON.stringify(data));
  },[socket.current])


  return (
    <>
      <Navbar handleClick={handleClick} loginId={loginId}/>
      <div>
        <Header text={"Manage Account Securely"} />
        <div className="mx-16 grid md:grid-cols-2 2xl:grid-cols-3">
          {
            details?.map((d)=>{
              return  <Card  key={d._id} handleClick={handleClick} loginId={d._id} deviceName={d.platform+" "+d.browser} time={d.date+" "+d.time} current={d._id==loginId?true:false}/>
            })
          }
      
        </div>
      </div>
    </>
  );
}
