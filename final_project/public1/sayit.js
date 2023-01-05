const Ui = {}

Ui.id = function(path) {
  return document.getElementById(path)
}

Ui.one = function(path) {
  return document.querySelector(path)
}

Ui.show = function (html) {
  Ui.id('main').innerHTML = html
}

Ui.goto = function (hash) {
  window.location.hash = hash
}

window.onhashchange = async function () {
    var tokens = window.location.hash.split('/')
    switch (tokens[0]) {

        case '#signup':
            await sign()
            break
        case '#login':
            await login()
            break

    }
}

window.onload = function () {
    window.onhashchange()
  }

  async function login() {
    Ui.show(`
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/sign-in/">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
            <style>         
                .container{
                  position: absolute;
                  left: 50%;
                  top: 37%;
                  height: 400px;
                  margin-top: -150px ;
                  width: 300px;
                  margin-left: -200px; 
                  border:1px solid rgb(218, 220, 224);
                  border-radius: 8px;
                  padding: 30px 50px;
                  display: flex;
                  flex-direction: column;
                }
                .title{
                  display: flex;
                  height: 50px;
                  padding: 5px 10px;
                  align-items: center;
                  justify-content: center;
                }
                /* Input form Style */
                input[type="text"], input[type="password"] {
                  border: 2px solid #afbdcf;
                  border-radius: 15px;
                  height: 47px;
                  width:300px;
                  color: #000000;
                  font-size: 14px;
                  box-shadow: none;  
                  padding-left: 20px;
                }
                /* Label style after Input feild is in focus. Can also use input:focus ~ label to select sibling. */
                input:focus + label, input:valid + label{
                  font-size: 12px;
                  color: #afbdcf;
                  top: -5px;
                  left:10px;
                  background: #ffffff;
                  padding: 0px 5px 0px 5px;
                }
                .input_wrap {
                  width:auto; 
                  height:auto; 
                  position:relative;
                  margin-top:30px;
                  margin-bottom: 10px;
                }
                .input_wrap label {
                  font-family:arial;
                  font-size:16px;
                  color: #afbdcf;
                  padding: 14px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  transition:0.2s ease all; 
                  -moz-transition:0.2s ease all; 
                  -webkit-transition:0.2s ease all;
                  pointer-events: none;
                }
                input[type="text"]:focus {outline:none;}
                .btn{
                background-color: rgb(10,102,194);
                color: white;
                font-weight: bold;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                transition: background-color 0.15s;
                height: 60px;
                width: 330px;
                margin-top: 30px;
                position:relative;
                right:15px;
                }
                .btn:hover{
                background-color: rgb(6, 62, 117);
                }
                .font{
                  font-size: 24px;
                  font-weight: bold;
                }
                .body{
                  font-family:Roboto,Arial;
                  font-size:24px;
                }
                .dot{
                    padding-left:10px;
                    padding-top: 10px;
                }
              </style>
        </head>
        <body>
            <div class="container">
                <div class="title">
                    <p class="font">Login in</p>
                </div>
                <div class="form_wrap">
                    <div class="input_wrap">
                        <input type="text" name="user" id="user" required/>
                        <label>Username</label>
                    </div>    
                    <div class="input_wrap">
                        <input type="password" id="password" required/ >
                        <label>Password</label>  
                    </div>  
                </div>
                <a  class="dot" href='#signup' >I don't have account number</a>
                <div class="button-type" >
                <input type="button" class="btn" value="Sign in" id = "btn"  onclick="serverLogin()">
                </div>
        </body>
    
    </html>
    `)
  }
  async function sign() {
    Ui.show(`
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/sign-in/">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
            <style>         
                .container{
                  position: absolute;
                  left: 50%;
                  top: 37%;
                  height: 400px;
                  margin-top: -150px ;
                  width: 300px;
                  margin-left: -200px; 
                  border:1px solid rgb(218, 220, 224);
                  border-radius: 8px;
                  padding: 30px 50px;
                  display: flex;
                  flex-direction: column;
                }
                .title{
                  display: flex;
                  height: 50px;
                  padding: 5px 10px;
                  align-items: center;
                  justify-content: center;
                }
                /* Input form Style */
                input[type="text"], input[type="password"],input[type="Email"] {
                  border: 2px solid #afbdcf;
                  border-radius: 15px;
                  height: 47px;
                  width:300px;
                  color: #000000;
                  font-size: 14px;
                  box-shadow: none;  
                  padding-left: 20px;
                }
                /* Label style after Input feild is in focus. Can also use input:focus ~ label to select sibling. */
                input:focus + label, input:valid + label{
                  font-size: 12px;
                  color: #afbdcf;
                  top: -5px;
                  left:10px;
                  background: #ffffff;
                  padding: 0px 5px 0px 5px;
                }
                .input_wrap {
                  width:auto; 
                  height:auto; 
                  position:relative;
                  margin-top:30px;
                  margin-bottom: 10px;
                }
                .input_wrap label {
                  font-family:arial;
                  font-size:16px;
                  color: #afbdcf;
                  padding: 14px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  transition:0.2s ease all; 
                  -moz-transition:0.2s ease all; 
                  -webkit-transition:0.2s ease all;
                  pointer-events: none;
                }
                input[type="text"]:focus {outline:none;}
                .btn{
                background-color: rgb(10,102,194);
                color: white;
                font-weight: bold;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                transition: background-color 0.15s;
                height: 60px;
                width: 330px;
                margin-top: 30px;
                position:relative;
                right:15px;
                }
                .btn:hover{
                background-color: rgb(6, 62, 117);
                }
                .font{
                  font-size: 24px;
                  font-weight: bold;
                }
                .body{
                  font-family:Roboto,Arial;
                  font-size:24px;
                }
                .dot{
                  padding-left:10px;
                  padding-top: 10px;
              }
              </style>
        </head>
        <body>
            <div class="container">
                <div class="title">
                    <p class="font">sign up</p>
                </div>
                <div class="form_wrap">
                    <div class="input_wrap">
                        <input type="email" name="email" id="email" required/>
                        <label>Email</label>  
                    </div> 
                    <div class="input_wrap">
                        <input type="text" name="user" id="user" required/>
                        <label>Username</label>
                    </div>    
                    <div class="input_wrap">
                        <input type="password" name="password" id="password" required/ >
                        <label>Password</label>  
                    </div>  
                </div>
                <a  class="dot" href='#login' >I have account </a>
                <div class="button-type">
                <input type="button" class="btn"  value="Sign up" id = "btn"  onclick="serverSignup()">
                </div>
        </body>
    
    </html>


    `)
  }


    async function serverLogin() {
      let user = Ui.id('user').value
      let password = Ui.id('password').value
      let r = await Server.post('/login', {user, password})
      console.log('serverLogin: r=', r)
      if (r.status == Status.OK) {
        localStorage.setItem('user', user)
        window.location.assign("index.html")
      } else
        alert('登入失敗: 請輸入正確的帳號密碼!')
    }

    async function serverSignup() {
      let user = Ui.id('user').value
      let password = Ui.id('password').value
      let email = Ui.id('email').value
      let r = await Server.post('/signup', {user, password, email})
      console.log('serverLogin: r=', r)
        if (r.status == Status.OK) {
          alert('註冊成功，開始登入使用!')
          Ui.goto('#login')
        } else {
          alert('註冊失敗，請選擇另一個使用者名稱!')
        }
      }

      const Server = {}

      Server.get = async function(path) {
        let r = await window.fetch(path, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        return {status:r.status, obj:await r.json()}
      }
      
      Server.post = async function(path, params) {
        let r = await window.fetch(path, {
          body: JSON.stringify(params),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        return {status:r.status, obj:await r.json()}
      }    
    const Status = {
      OK:200,
      Fail:400,
      Unauthorized:401,
      Forbidden:403,
      NotFound:404,
  }


  

  
