async function sqlrun(){

    let command = document.getElementById('command').value //取id command值
    let rzjson = document.getElementById('resultJson')// 
    let a = await window.fetch(`/sqlcmd/${command}`) //到對應的位置取結果
    let obj = await a.json()
    rzjson.innerText = JSON.stringify(obj, null, 2) //顯示結果

}