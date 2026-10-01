import { pool } from '../config/db'

class clienteService {
async getAII(){
const res=await pool.query("SELECT");
 res.rows;

}
async create(dados){
const res =await pool.query("INSERT INTO... RETURNING"[dados..]);
return ResizeObserver.rows[0];


}}