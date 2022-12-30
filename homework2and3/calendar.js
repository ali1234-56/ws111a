import { Application, Router  } from "https://deno.land/x/oak/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import * as render from './render2.js'

const db = new DB("calendar.db") ;

const router = new Router() ;

router.get("/",fontpage);
router.get("/calendar/newcalendar",add);
router.get("/calendar/:id",show);
router.get("/calendardel/:id",deletecal);
router.get("/calendarall",deleteall);
router.post("/calendar",create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

db.query("CREATE TABLE IF NOT EXISTS calendar1 (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, body TEXT)");

function query(sql) {

    let list = []

    for (const [id, date, body] of db.query(sql)) {

      list.push({id, date, body})

    }
    return list

  }

  async function fontpage(ctx) {

    let calendar1 = query("SELECT id, date, body FROM calendar1")


    ctx.response.body = await render.fontpage(calendar1);

  }


  async function add(ctx) {

    ctx.response.body = await render.newcalendar();

  }

  async function show(ctx) {
    const pid = ctx.params.id;
    let calendar1 = query(`SELECT id, date, body FROM calendar1 WHERE id=${pid}`)
    let calendar2 = calendar1[0]
    
    if (!calendar2){

      ctx.throw(404, 'invalid post id');
    }

    ctx.response.body = await render.show(calendar2);

  }

  async function create(ctx) {

    const body = ctx.request.body()

    if (body.type === "form") {

      const pairs = await body.value
      const post = {}

      for (const[key, value] of pairs) {

        post[key] = value

      }
      db.query("INSERT INTO calendar1 (date,body) VALUES (?, ?)", [post.date, post.body]);

      ctx.response.redirect('/');
    }
}

async function deletecal(ctx){

  db.query(`DELETE FROM calendar1 WHERE id=${ctx.params.id}`);
  ctx.response.redirect('/');

}

async function deleteall(ctx){

  db.query(`DELETE FROM calendar1`);
  ctx.response.redirect('/');

}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });