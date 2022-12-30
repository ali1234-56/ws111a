export function all(title,object){
    return `
    
    <html>
    <head>

    <title>${title}</title>

    </head>

    <body>
    <section>

    ${object}

    </section>
    </body>

    </html>
          
    `    
}

export function fontpage(calendar1) {

    let list = []

    for (let a of calendar1) {
      list.push(`
      <li>
        <h2>${ a.date }</h2>
        <p><a href="/calendar/${a.id}">Read calendar</a></p>
        <p><a href="/calendardel/${a.id}">delete calendar</a></p>     
      </li>
      `)
    }
    let object = `
    <h1>my calendar</h1>
    <p>You have <strong>${calendar1.length}</strong> calendar</p>
    <p><a href="/calendar/newcalendar">add a calendar</a></p>
    <p><a href="/calendarall">clear calendar</a></p>
    <ul id=" ">
      ${list.join('\n')}
    </ul>
    `
    return all('Posts', object)
  }

  export function newcalendar(){
    return all('newcalendar',`
    <h1>
    create new calendar
    </h1>
    <form action="/calendar" method="post">
        <p>
            <input type="date" name="date">
        </p>
        <p>
            <textarea placeholder="message" name="body"></textarea>
        </p>
        <p>
            <input type="submit" value="Create">
        </p>
    </form>
    `);
  }

  export function show(post){

    return all( " ",
        `
        <h1>
            ${post.date}
        </h1>
        
        <p>
            ${post.body}
        </p>

        `);
}