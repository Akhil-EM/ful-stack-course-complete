////console.log(module);

// var event=require('events');
// var eventEmitter=new event.EventEmitter;
// function ringBell()
// {
//     console.log("ting tong ,ting tong");
// }

// /////register
// eventEmitter.on('dooropen',ringBell);
// //// dooropen = name of event ringBell= what to do on event call
// eventEmitter.emit('dooropen')////firing or rising
// //// calling of event


// const EventEmitter=require('events');
// var emitter=new EventEmitter();

// ////register a listner 
// emitter.on("myevent",(id,name)=>{
//   console.log(`id is ${id} . name is ${name}`);
// });

// /////rise event and pass parameter
// emitter.emit('myevent',1,'akhil');

var str='akhailem';
console.log(str.substring(1,3));
console.log(str.substr(1,3));
console.log(str.split('a',5));
// console.log(NaN==NaN);