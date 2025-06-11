import {Router} from "express";
import pool from "../database.js";

const router = Router();

router.get("/list", async (req,res)=>{
  try{
    const personas = await pool.query("SELECT * FROM persons");
    res.render("personas/listar", {personas: personas[0]});
  }catch(error){
    res.status(500).json({message: error.message});
  }

})

router.get("/add", (req,res)=>{
  res.render("personas/add");
})

router.post("/add", async (req,res)=>{
  try{
    const {nombre, apellido, edad} = req.body;
    const persona = {nombre, apellido, edad};
    console.log(persona);
    if(persona){
      await pool.query("INSERT INTO persons SET ?", [persona]);
      res.redirect("/list");
    }
    
  }catch(error){
    res.status(500).json({message: error.message});
  }
})

router.get("/edit/:id", async (req,res)=>{
  try{
    const id = req.params.id;
    const persona = await pool.query("SELECT * FROM persons WHERE id = ?", [id]);
    res.render("personas/edit", {persona: persona[0][0]});
  }catch(error){
    res.status(500).json({message: error.message});
  }
})
router.post("/edit", async (req,res)=>{
  try{
    const id = req.body.id;
    const {nombre, apellido, edad} = req.body;
    const persona = {nombre, apellido, edad};
    await pool.query("UPDATE persons SET ? WHERE id = ?", [persona, id]);
    res.redirect("/list");
  }catch(error){
    res.status(500).json({message: error.message});
  }
})

router.get("/delete/:id", async (req,res)=>{
  try{
    const id = req.params.id;
    await pool.query("DELETE FROM persons WHERE id = ?", [id]);
    res.redirect("/list");
  }catch(error){
    res.status(500).json({message: error.message});
  }
})
export default router;