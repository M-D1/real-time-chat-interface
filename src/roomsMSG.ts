
import code from './assets/codeIcon-_1_.svg'
import chess from './assets/chessIcon-removebg-preview-_1_.svg'
import six from './assets/mono__1_-removebg-preview.png'

import { rooms } from './rooms'











//console.log(rooms[0].msgs[rooms[0].msgs.length-1].message)
export const roomsMsg : {
    id:number,
    name:string,
    img:string ,
    time:number,
    message:string ,
    unread:boolean,
    isOnline:boolean
}[]
=  [
    {
        id:3,
        name:'FrontEnd Development',
        img: code,
        time:2,
        message: rooms[0].msgs[rooms[0].msgs.length-1].message,
        unread:false,
        isOnline:false
    },
    {
        id:4,
        name:'Chess',
        img: chess,
        time:3,
        message:rooms[1].msgs[rooms[1].msgs.length-1].message,
        unread:false,
        isOnline:true
    },
    {
        id:5,
        name:'Anime',
        img: six,
        time:4,
        message:rooms[2].msgs[rooms[2].msgs.length-1].message,
        unread:false,
        isOnline:false
    },
]