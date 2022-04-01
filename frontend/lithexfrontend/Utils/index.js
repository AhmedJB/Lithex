const base_url = "http://127.0.0.1:8000" //"https://be92-105-69-202-246.ngrok.io"  //
const api = base_url + '/api/'

function set_header(token = null){
    try {
        console.log(token);
        if ( token == null){
            var obj = {
                'Content-Type': 'application/json',
            }
        } else {
            var obj = {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
        }
        
        console.log(obj);
        return obj
    } catch (error) {
        console.log(error);
        
    }
   
}


export async function get_token(username = null , password = null){

    let body = {
        username,
        password
    }

    let headers = set_header();

    let options = {
        method : 'post',
        body : JSON.stringify(body),
        headers : headers,
        mode : 'cors'
     }

    

    let preResp = await fetch(api + 'token', options);
    if (preResp.ok){
        console.log('got token');
        var resp = await preResp.json();
        let access = resp.access;
        let refresh = resp.refresh;
        sessionStorage.setItem('refreshToken',refresh);
        sessionStorage.setItem('accessToken',access);
        resp = await isLogged();
        return resp;
    }else{
        return false;
    }
    
    
}


export async function registerCall(data){
    console.log(data);
    

    let headers = set_header();

    let options = {
        method : 'post',
        body : JSON.stringify(data),
        headers : headers,
        mode : 'cors'
    }

    

    let preResp = await fetch(api + 'register', options);
    
    if (preResp.ok) {
        let nextresp = await get_token(data.username,data.password);
        return nextresp;

    }else{
        return false
    }
    

}



export async function refreshToken(){
    let refresh = sessionStorage.getItem('refreshToken');
    let headers = set_header();
    let options = {
        method : 'post',
        body : JSON.stringify({
            refresh
        }),
        headers : headers,
        mode : 'cors'

    }

    let preResp = await fetch(api + 'token/refresh' , options);
    if (preResp.ok){
        let resp = await preResp.json();
        let access = resp.access;
        sessionStorage.setItem('accessToken',access);
        return true;

    }else{
        console.log('need to login');
        return false;
    }


}




export async function postReq(url,body){
    let access = sessionStorage.getItem('accessToken');
    let headers = set_header(access);

    /* let body = {
        title,
        keywords
    } */

    let options  = {
        method : 'post',
        body : JSON.stringify(body),
        headers : headers,
        mode : 'cors'
    }

    let preResp = await fetch(api + url,options);
    if (preResp.ok){
        let resp = await preResp.json();
        console.log(resp);
        return resp;
    }else if (preResp.status == 401){
        let dec = await refreshToken();
        if (dec){
            return postReq(url,body);
        }else{
            
            return false;
        }
    }else {
        console.log('other errors');
        return false;
    }

}





export async function req(url){
    let access = sessionStorage.getItem('accessToken');
    let headers = set_header(access);

    let options  = {
        method : 'get',
        headers : headers,
        mode : 'cors'
    }

    let preResp = await fetch(api + url,options);
    if (preResp.ok){
        let resp = await preResp.json();
        return resp;
    }else if (preResp.status == 401){
        let dec = await refreshToken();
        if (dec){
            return req(url);
        }else{
            
            return false;
        }
    }else {
        console.log('other errors');
        return false;
    }


}


export async function req_body(url,body){
    let access = sessionStorage.getItem('accessToken');
    let headers = set_header(access);

    let options  = {
        method : 'get',
        headers : headers,
        body,
        mode : 'cors'
    }

    let preResp = await fetch(api + url,options);
    if (preResp.ok){
        let resp = await preResp.json();
        return resp;
    }else if (preResp.status == 401){
        let dec = await refreshToken();
        if (dec){
            return req(url);
        }else{
            
            return false;
        }
    }else {
        console.log('other errors');
        return false;
    }


}



export async function isLogged(){
    let resp = await req('session');
    return resp;
}


export function logout(setUser) {
    console.log("logged out")
    let obj = {
        logged : false,
        username : null,
		joined : null,
        email : null
    }
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    setUser(obj);
  }