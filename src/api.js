//Will code the main logic sometime later But here is the logic aka code of to just fetch the 
//results output stored in the that we can show on the frontend 
//Our Aim -> To show all the trades of the user (they give the address)
//        -> To show all the avialable pools 
//That is it for now and this is going to be as simple as possible for understanding purpose
import "dotenv/config";
import express from "express";
import cors from "cors"; //Cause the browser will req, but does that makes sense here cause all are get req 

const app = express();

const tradesByUser = db.prepare(`
  SELECT * FROM trades WHERE user_address = ?
  ORDER BY block_number DESC, log_index DESC LIMIT ? OFFSET ?
`);

const recentTrades = db.prepare(`
  SELECT * FROM trades
  ORDER BY block_number DESC, log_index DESC LIMIT ? OFFSET ?
`);

//So understanding the concepts from the first principles 

app.get('trades/user', (req, res) => {
    const user = req.query.user;

    return tradesByUser.all(user);
})

app.get('trades/raw', (req, res) => {
    return recentTrades.all();
})


//What i have done here is just mergedd those two routes into one
//constrained by a condition weather the user is provided or not 
app.get('/trades', (req, res) => {
    const user = req.query.user;

    const rows = user ? tradesByUser.all(user.toLowerCase()) 
    : recentTrades.all();

    res.json(rows);
})

app.listen(3000, () => console.log("server started at the port 3000"));


//The Security issue with this is being disscussed in API.md file 