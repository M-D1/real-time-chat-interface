import { useState } from "react"
import { Form } from "react-router-dom"

import {users} from '../users'
import {usersMsg} from "../usersMessage"

export function CreateRooms(){
    const[img,setImg] = useState('')
    const[selectedFile,setSelectedFile] = useState('No selected File')

    


    function handleChange({target : {files}} : any){
        files[0] && setSelectedFile(files[0].name)
        if(files){
            setImg(URL.createObjectURL(files[0]))
            
        }
    }

    function handleCLK(event:React.MouseEvent){
        (event.target as HTMLInputElement).value = ''   
    }
    return(
        <>
            <div className="createRooms">
                <div className="container">
                    <form 
                        className=" fm"
                        onClick={() => {
                            const emg : HTMLElement = document.querySelector('.input--field')!
                            emg.click()
                        }}>
                        <input type="file" accept="image/*" className="input--field" hidden
                         onChange={(e) => handleChange(e)} onClick = { handleCLK}/>
                        {img ?
                            <img  src={img} alt={selectedFile} className="avatar__img imgw-2"/>    

                            :
                            <p className="pointer">Upload Image</p>
                        }
                        
                    </form>
                    <span>
                            <p className="selected">{selectedFile}</p>
                            <p onClick={() => {
                                setSelectedFile('No selected File')
                                setImg('')
                            }}>🗑️</p>
                    </span>

                    <Form className="form s" method="post" action="/createRooms">
                        <input type="text" name="name" placeholder="Rooms Name" />
                        <textarea name="textArea" id="" cols={30} rows={10} placeholder="What is the room About"/>
                        <textarea name="message"  placeholder="Write an introductory Message to the Group" />
                        <button disabled={img ? false : true}  > Create Room</button>
                    </Form>
                    
                </div>
            </div>
        </>
    )
}

export const createRoomAction = async ({ request } : any) => {
    
    const data = await request.formData()

    const img  = document.querySelector('.imgw-2')! as HTMLImageElement   

   
    
    const newRoom:{
        id:number,
        name:string,
        img:string ,
        message:string,
        time:number,
        textArea:string,
        unread: false,
        isOnline:boolean
    }
      = {
        id:users[users.length - 1].id + 1,
        name: data.get('name'),
        textArea: data.get('textArea'),
        img: img.src,
        time:9,
        message:data.get('message'),
        unread:false,
        isOnline:true
        
    }
    if(newRoom.message === '' && newRoom.name === '' && newRoom.textArea === ''){
        alert('please fill all the fields')
    }else{
        const newRoomMsg = {
            id:usersMsg[usersMsg.length - 1].id + 1,
            msgs:[{message:newRoom.message,msgType:'sent',isWaiting : false}]   
           }
       
           usersMsg.push(newRoomMsg)
         
           users.push(newRoom)
    }
    
   
   
    
    return null

  
    
    
     

    
}

