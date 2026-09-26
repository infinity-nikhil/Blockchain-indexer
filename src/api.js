//Will code the main logic sometime later But here is the logic aka code of to just fetch the 
//results output stored in the that we can show on the frontend 
//Our Aim -> To show all the trades of the user (they give the address)
//        -> To show all the avialable pools 
//That is it for now 
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

app.get('/trades', (req, res) => {
    const user = req.query.user;

    user
})