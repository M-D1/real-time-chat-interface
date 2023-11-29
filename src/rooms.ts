import code from './assets/codeIcon-_1_.svg'
import chess from './assets/chessIcon-removebg-preview-_1_.svg'
import six from './assets/mono__1_-removebg-preview.png'

export const rooms :{
    name:string,
    members?:number,
    about?:string,
    img:string,
    msgs: {message:string,msgType:string}[]
}[] = [
    {
        name:'FrontEnd Development',
        members:45,
        about:'JOIN! we talk everthing the involves frontend we meetings and challenge it is fun',
        img:code,
        msgs:[
            {message:'Hi EveryOne How Are You??!!',msgType:'received'},
            {message:'Calm Down ',msgType:'received'},

            {message:`What? They are existed for this group to come I mean come on is it bad to
            express enjoyment?`,msgType:'received'},

            {message:`(sigh) they never said it like that. No it's not bad to express enjoyment`,msgType:'received'},
            {message:`so why tell to calm down? I mean they WANTED  this group to be created
                so all the code fan can have fun while coding
            `,msgType:'received'},
            {message:'Okay Okay calm down guys',msgType:'received'},
            {message:`anyyyywaaay tell me code lovers how are you doing?`,msgType:'received'},
            {message:`pretty well thx for asking`,msgType:'received'},
            {message:'I am good ',msgType:'received'},
            {message:'HAVING A GREAT TIME',msgType:'received'},
            {message:'Good',msgType:'received'},
            {message:'Preeety nice',msgType:'received'},
            {message:'wel',msgType:'received'},
            {message:'bad',msgType:'received'},
            {message:'whoah why so dark all of the sudden!?',msgType:'received'},
            {message:'so dark😒😒',msgType:'received'},
            
            {message:'ok ok what is wrong with you? they say their are feeling bad  and you react like this? ',msgType:'received'},
            {message:'are you okay??',msgType:'received'},
            {message:`if you are feeling bad then go find help and don't come here tell us cause we do not care 🤣🤣🤣`,msgType:'received'},
            {message:'speak for youself',msgType:'received'},
            {message:`admin please remove the person that talks like that about the person feeling bad
            THIS is a place where frontend lovers come to help each other to improve and be well mentally we don't want
            that inhumane man 😒😒
            
            `,msgType:'received'},
            {message:`yes kick him`,msgType:'received'},
            {message:`yeeah do it !!`,msgType:'received'},
            {message:`wait where is admin??`,msgType:'received'}
        ]
    },
    {
        name:'Chess',
        members:20,
        about:`weekly puzzles and challenges , tips to improve in chess. we care about growing this room and helping each other to improve in this game`,
        img:chess,
        msgs:[
            {message:`Hello everyone Welcome to this community where chess we play
            where fun is the most important where toxicity is destroyed
            where love is spread where our goals are similar where elo is rising where we win where we lose`,
        msgType:'received'},

           {message: 'wow the message is understood but the way it was phrased it is bad sorry',msgType:'received'},
            {message:`well this is gonna be fun right??`,msgType:'received'},
            {message:`FUN?? you say no it is not fun chess is a mental sport it made so many people go
            insane `,msgType:'received'},
            {message:`well bc they took it tooo seriuos 😒😒 most high level who reached insane level of
            chess went insane on top of that they are arrogant I mean the only person who
            reached that high level without going insane is Magnus Carlsen for now
            who knows what might happen in the future
            `,msgType:'received'},

            {message:'chess is fun not insane we just have to play it for fun',msgType:'received'},
            {message:`sometimes chess can be insane I mean it is crazy how can a board game 
            will make people go crazy`,msgType:'received'},
            {message:`yep chess sometimes if taken tooo seriuos it will damage the player`,msgType:'received'},
            {message:'how about we change the convo??',msgType:'received'},
            {message:'why? we need to discuss mental ilness that is caused by chess duo to players taking it too serious',msgType:'received'},
            {message:'well it is their fault to go insane for taking it too serious',msgType:'received'},
            {message:`hmm I really don't know I am not realy knowledgable to talk about this topic`,msgType:'received'},
            {message:`me too`,msgType:'received'},
            {message:'well there are some problems with the greats of chess like their ego',msgType:'received'},
            {message:'well that what happens if you are born with talent maturity is not specified with age',msgType:'received'},
            {message:'in my opinion chess can be fun the top players are fine well not all but there is some good people in the top',msgType:'received'},
            
            {message:'oh really who? ',msgType:'received'},
            {message:'ding liren',msgType:'received'},
            {message: `yep ding he is humble and seems sane he is down to earth guy but Magnus is not `,msgType:'received'},
            {message:'yeah agree but I like arrogant people they are fun🤣🤣',msgType:'received'},
            {message: `I really don't know why you would think arrogant people are fun they are over the
            top and thinks of themself so highly when they are just a chess players
            so stupid😒😒😒
            
            `,msgType:'received'},
            {message:`HAHAHAH yeah they think like we are the best like someone🤣🤣🤣`,msgType:'received'},
            {message:`🤣🤣🤣🤣🤣🤣🤣`,msgType:'received'},
            {message:`🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣`,msgType:'received'}
        ],

    },
    {
        name:'Anime',
        members:10,
        about:'we talk about anime only no manga spoiler plz',
        img:six,
        msgs:[
            {message:` Hi 👋`,msgType:'received'},
            {message:'hi ',msgType:'received'},
            {message:`the rules are simple 
            be respectfull
            don't put spoilers

            `,msgType:'received'},
            {message:`OKAY `,msgType:'received'},
            {message:`
            K
            `,msgType:'received'},
            {message:'so what are you guys wathcing??',msgType:'received'},
            
        ]

    }
]