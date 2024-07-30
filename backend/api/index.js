import express from "express";

const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log("Server telah berjalan di port 3000");
})


const users=[
    {
        id:1,
        name:"tisa",
        age:21,
    },
    {
        id:2,
        name:"pitri",
        age:21,
    }
]


app.get("/user",(req,res)=>{
    res.send(users);
})

app.get("/user/:id",(req,res)=>{
    const user=users.find((u)=>u.id==req.params.id)
    if(user){
        res.send(user);
    }else{
        res.send("user not found");
    }
})


//menambahkan user

app.post("/user",(req,res)=>{
    users.push(req.body);
    res.send("berhasil di tambahkan");
})

//edit
app.put("/user/byindex/:id",(req,res)=>{
    const index=users.findIndex((u)=>u.id==req.params.id)

    users[index]=req.body;
    res.send("berhasil di ubah");
})

//hapus
app.delete("/user/byindex/:id",(req,res)=>{
    const index=users.findIndex((u)=>u.id==req.params.id)

    users.splice(index,1);
    res.send("berhasil di hapus");
})
