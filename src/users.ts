import avatar1 from './assets/avatat111new__1_-removebg-preview.svg'
import avatar2 from './assets/avatar222new__1_-removebg-preview.svg'
import avatar3 from './assets/avatar333new__1_-removebg-preview.svg'

import {usersMsg} from './usersMessage'
console.log(usersMsg[0].msgs[usersMsg[0].msgs.length- 1].message)

export const users :any = 
[
    {
        id:0,
        name:'Mark',
        img:avatar2,
        time:11,
        message:usersMsg[0].msgs[usersMsg[0].msgs.length- 1].message,
        unread:false,
        isOnline:true
    },
    {
        id:1,
        name:'Lisa',
        img:avatar1,
        time:12,
        message:usersMsg[1].msgs[usersMsg[1].msgs.length- 1].message,
        unread:false,
        isOnline:false
    },
    {
        id:2,
        name:'Mary',
        img:avatar3,
        time:13,
        message:usersMsg[2].msgs[usersMsg[2].msgs.length- 1].message,
        unread:true,
        isOnline:true
    }
]

