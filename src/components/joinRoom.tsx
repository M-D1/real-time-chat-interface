


import {rooms}  from '../rooms'

import {  useNavigate } from 'react-router-dom'

import {users} from '../users'
import {  usersMsg } from '../usersMessage'
import { roomsMsg } from '../roomsMSG'
export function JoinRooms(): JSX.Element{
    const navigate= useNavigate()

    function handleClick(id : number) : void{
    
        if(!users.includes(roomsMsg[id])){
            
            users.push(roomsMsg[id])
           
           
           

            
            usersMsg.push(
               {
                id:usersMsg[usersMsg.length - 1].id + 1,
                msgs:rooms[id].msgs
               }
            )

          
        }
        
        
         navigate(`/home/${roomsMsg[id].id}`)
       
    }
   

    const roomsElement = rooms.map((room,index) => (
        
            <div key={index} className='rooms--container' onClick={() => handleClick(users[index].id)} >
                    <div>
                        <img src={room.img} alt="" className={index ===2 ? 'img-w' :'avatar__img'} />
                    </div>
                    <div>
                        <p className='rooms__name'>{room.name}:</p>
                        <p className='rooms__about'>
                        {room.about}
                        </p>
                    </div>
                    <div>
                        <p className='rooms__members'>Members: {room.members}</p>
                    </div>
             </div>
       
    ))
    return(
        <>
            <div className='rm'>
                <button className='backBtn' onClick={() => navigate(-1)}> ⬅️ Back to your chats</button>
                {roomsElement}
            </div>
        </>
    )
}