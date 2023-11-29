 

 import {users} from '../users'
 import { Link } from 'react-router-dom'
 
 export function Home() : JSX.Element{
    console.log(users)
    const usersInfo: JSX.Element[] = users.map((user : any,index : number) => (
        
        <Link to={`/home/${user.id}`} key={user.id} className='hover--effect'>

            <div className="users">
                <div>
                    <img src={user.img} alt="" className='avatar__img ' />
                    
                </div>
                <div>
                    <p className='avatar__name'>{user.name}:</p>
                    <p className={`${user.unread ? 'unread' : 'users__message'} msg`}>
                        {user.message}  
                    </p>
                    {user.unread && <div className='unread__notification'>1</div>}
                </div>
                <p className='time'>{user.time}:0{index + 1}AM</p>
            </div>
        </Link>
        
    ))

    const usersDesc: JSX.Element[] = users.map((user:any) => (
        <div className='avatar' key={user.id}>
            <p className='avatar__name'>{user.name}</p>
            <img src={user.img} alt="" className='avatar__img imgw-1' />
            <div className={user.isOnline ? 'active__status':'offline__status'}></div>
          
        </div>
    ))
    //(index + 1) % 2 === 0 ? 'active__status' : 'offline__status'
    return(
        <div className='home--container'>
            <div>
               <div className='avatar--container'>
                    {usersDesc}
                </div> 

                <div className='rooms'>
                    <Link to='/createRooms'>
                    
                        <button>Create Room</button>
                    </Link>

                    <Link to='/joinRooms'>
                    
                        <button>Join Room</button>
                    </Link>
                </div>
            </div>
            <div className='snd--child'>
                {usersInfo}
            </div>
            
        </div>
    )
}