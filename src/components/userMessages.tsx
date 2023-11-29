import {usersMsg} from '../usersMessage'
import {users} from '../users'

// import manProfile from '../assets/man_profile-removebg-preview (1).png'
// import womenProfile from '../assets/women_profile-removebg-preview (1).png'

import { useParams ,Link } from 'react-router-dom'

import myIcon from '../assets/myAvatar-_1_.svg'
import { useState} from 'react'

export function UserMessages(): JSX.Element {
    const [input,setInput] = useState('')
    const [isWaiting,setWaiting] = useState(true)
    const {id} : any = useParams()
    const [img,setImg] = useState('')
    const [selectedFile,setSelectedFile] = useState('No Selected File')
   

    
   
   

   

    

    

    const [msgsArr,setMsgsArr] = useState(usersMsg[id].msgs)

  
    
    
   

    
    let user : {
        id:number,
        name:string,
        img:string  ,
        time:number,
        message:string ,
        unread?:boolean

    } ={
        // this are just placeholders
        id:0,
        name:'',
        img:'' ,
        time:0,
        message:'' ,
        unread:false
    };

    for(const u of users){
        if(u.id === +id){
            user = u
        }

        
    }
   

    
    

    if(user.unread === true){
        user.unread = false
    }
   
    
    // function imgSrc(index:number , id:number) : string {

    //     if(id >= 3){
    //         return  imgArr[Math.floor(Math.random() * imgArr.length)]
    //     }
        
    //     if((index + 1) % 2 === 0){
    //           return myIcon
    //     }else{
    //         return user.img
    //     }
       
    // }
    function loadingState(msg : string,waiting : boolean | undefined){
        if(msg === 'sent' && waiting === false){
           return <span>✔️</span>
        }else if(msg === 'sent' && waiting === true){
            return <span>{isWaiting ?'⏳⌛️' :'✔️'} </span>
        }
    }
    

   
    const el :JSX.Element[] = msgsArr.map((msg,index) => (
        <div className={`messages ${msg.msgType === 'sent'? 'me' : 'you'} `} key={index}>
        <div>
            <div className='messages__img'>
            
                <img src={msg.msgType === 'sent' ? myIcon : user.img} alt="" className='avatar__img' />
                
            </div>
            <div className='messages__message'>
                <p>{msg.message}</p>
                <p className='messages__time'>{user.time}:{index >= 9 ? '': '0' }{index+ 1}AM</p>
                <div className='loading'>{loadingState(msg.msgType,msg.isWaiting)} </div>
            </div>
           
        </div>
    </div>
    ))
  

    function handleClick() : void{
        if(input === ''){
            alert('please type something')
        }
        else{
            setMsgsArr(prev => (
                [...prev,{message:input,msgType:'sent',isWaiting: isWaiting}]
            ))
        }
      
        
        setInput('')
        setTimeout(() => {
            setWaiting(prev => !prev)
        },1500)

       
    }

    function handleChange(e :any){
        const {value} = e.target
        setInput(value)
    }

    function handleChng({target : {files}} : any){
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
            
            <div className='user'>
                <div className='user__top-section'>
                    <Link to='..' relative='path' className='backToPreviousPage'>⬅️</Link>
                    <div>
                        <img src={user.img} alt="" className='avatar__img' />
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <p className='phone'>📞</p>
                    </div>
                </div>

                
            </div>
            <div className='messages--container'>
                {el}
               
            </div>
            <div>
                <div className='input--contianer'>

                    <form 
                        className={img ? 'fa' : 'fm'}
                        onClick={() => {
                            const em : HTMLInputElement = document.querySelector('.input--field')!
                            em.click()
                        }}>
                        <input type="file" accept="image/*" className="input--field" hidden
                        onChange={(e) => handleChng(e)} onClick = { handleCLK }/>
                        {img ?
                        <img  src={img} alt={selectedFile} className="avatar__img imgw-2"/>    

                        :
                        <p className='pointer'>Upload Image</p>
                        }

                    </form>
                    {img &&
                        <span className={img && 'span'}>
                            <p className="selected">{selectedFile}</p>
                            <p onClick={() => {
                                setSelectedFile('No selected File')
                                setImg('')
                            }}>🗑️</p>
                        </span>
                    }
                    

                    {/* <button className='file__upload' >
                        +
                        <input type="file" className='input--file' />
                    </button> */}
                    <input type="text" className='input--text' value={input} onChange={(e) => handleChange(e)} />
                    <button className='send' onClick={handleClick} >➡️</button>
                </div>
            </div>

        </>
    )
}