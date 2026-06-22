const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main()
.then(()=>{console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats=[
        {
          from: "abc",
          to: "xyz",
          msg: "hello how are you ?",
          created_at: new Date()
        },
        {
          from: "john",
          to: "emma",
          msg: "Good morning!",
          created_at: new Date()
        },
        {
          from: "alice",
          to: "bob",
          msg: "Did you complete the project?",
          created_at: new Date()
        },
        {
          from: "mike",
          to: "sarah",
          msg: "Let's meet at 6 PM.",
          created_at: new Date()
        },
        {
          from: "rohan",
          to: "rahul",
          msg: "Where are you now?",
          created_at: new Date()
        },
        {
          from: "priya",
          to: "neha",
          msg: "Happy Birthday!",
          created_at: new Date()
        },
        {
          from: "david",
          to: "lucy",
          msg: "Check your email.",
          created_at: new Date()
        },
        {
          from: "arjun",
          to: "kabir",
          msg: "Can you send the notes?",
          created_at: new Date()
        },
        {
          from: "simran",
          to: "ananya",
          msg: "See you tomorrow.",
          created_at: new Date()
        },
        {
          from: "vijay",
          to: "amit",
          msg: "Let's start the meeting.",
          created_at: new Date()
        }
      
];

Chat.insertMany(chats);