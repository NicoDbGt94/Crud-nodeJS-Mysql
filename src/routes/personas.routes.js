import {Router} from "express";
import pool from "../database.js";

const router = Router();

router.get("/list", async (req,res)=>{
  try{
    const personas = await pool.query("SELECT * FROM persons");
    res.render("personas/listar", {personas});
  }catch(error){
    res.status(500).json({message: error.message});
  }

})


export default router;