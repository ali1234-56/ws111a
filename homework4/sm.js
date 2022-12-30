import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";


const db = new DB("sqldb.db");
const app = new Application()
const router = new Router()

router.get('/', font_page)
router.get('/sqlcmd/:cmd', sqlcmd)
router.get('/public/(.*)', public1)

app.use(router.routes())
app.use(router.allowedMethods())


db.query("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, text TEXT)");//新增表格

db.query("DELETE FROM user WHERE Name='alice'")//刪除上一個表格alice的資料

let sql = `INSERT INTO user(id,name,text)
           VALUES(1,'alice','hello')`;

db.query(sql);

async function font_page(ctx) {

    ctx.response.redirect('/public/') //跑到public網址
}


async function public1(ctx) {

    await send(ctx, ctx.request.url.pathname, {

        root: `${Deno.cwd()}/`,
        index: "index_sm.html", //回傳index_sm.html

    })

}

async function sqlcmd(ctx) {

    try {

        let cmd = ctx.params['cmd']
        let result = db.query(cmd)
        ctx.response.type = 'application/json'
        ctx.response.body = result

    }

    catch (err) {

        ctx.response.body = err.message;

    }

}

console.log('Server run at http://127.0.0.1:5000')
await app.listen({ port: 5000 })

//INSERT INTO 表格名 (欄位1,欄位2,欄位3)
//VALUES (內容, '內容', '內容');   新增

//SELECT 欄位1,欄位2,欄位3 FROM 表格名;   查詢

//DELETE FROM 表格名 WHERE 欄位='內容';   刪除

//UPDATE 表格名 SET 修改欄位='內容' WHERE 其他欄位='內容';   更新