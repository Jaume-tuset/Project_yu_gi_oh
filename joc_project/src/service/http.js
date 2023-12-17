export {
    SUPABASE_KEY,urlBase,headers,
    supaRequest, loginSupabase, fileRequest, getFileRequest, signUpSupabase, logoutSupabase, recoverPasswordSupabase, getData, updateData, createData,
  };

const urlBase = 'https://gmlzjxsypdgmyloaxoze.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const headers = {
    "apiKey": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbHpqeHN5cGRnbXlsb2F4b3plIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzY2NzA3MiwiZXhwIjoyMDEzMjQzMDcyfQ.wC4P2_Iobf0CP830uZwP0VFqWJ5oaZdKMQZrCKBIIpQ,
    "Content-Type":"application/json",
};

async function supaRequest(url,method,headers,body){
    let response = await fetch(url,{
        method,
        headers,
        body: JSON.stringify(body)   
    });
    if(response.status >=200 && response.status <=300){
        if(response.headers.get("content-type")){ 
            return await response.json();
        }
        return {}; 
    }
    else{
        return Promise.reject(await response.json()); 
    }
}
async function fileRequest(url,body,token){
    const headersFile = {
        "apiKey": SUPABASE_KEY,
        "Authorization" :`Bearer ${token}`,
        "x-upsert": true  
    }; 
    let response = await fetch(`${urlBase}${url}`,{
        method: 'POST',
        headers: headersFile,
        body
    });
    if(response.status >=200 && response.status <=300){
        if(response.headers.get("content-type")){
            let datos = await response.json(); 
            datos.urlAvatar = `${urlBase}${url}`;
            return datos;
        }
        return {};
    }
    else{
        return Promise.reject(await response.json());
    }
}

async function getFileRequest(url,token){
    const headersFile = {
        "apiKey": SUPABASE_KEY,
        "Authorization" :`Bearer ${token}`,
    }; 
    let response = await fetch(`${url}`,{
        method: 'GET',
        headers: headersFile,
        
    });
    if(response.status >=200 && response.status <=300){
        if(response.headers.get("content-type")){
            let datos = await response.blob();
            return datos;
        }
        return {};
    }
    else{
        return Promise.reject(await response.json());
    }
}
async function loginSupabase(email,password){ 
    let url = `${urlBase}/auth/v1/token?grant_type=password`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}

async function signUpSupabase(email,password){ 
    let url = `${urlBase}/auth/v1/signup`;
    let data = await supaRequest(url,'post',headers,{ email, password });
    return data;
}

async function logoutSupabase(token){ 
    let url = `${urlBase}/auth/v1/logout`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token};
    let data = await supaRequest(url,'post',headersAux,{});
    return data;
}

async function recoverPasswordSupabase(email){
    let url = `${urlBase}/auth/v1/recover`;
    let headersAux = {...headers};
    let data = await supaRequest(url,'post',headersAux,{email});
    return data;
}

async function getData(URI,token){
    let url = `${urlBase}/rest/v1/${URI}`;
    let headersAux = {...headers, "Authorization" :"Bearer "+token};
    let data = await supaRequest(url,'get',headersAux);
    return data;
}

async function updateData(URI,token,data){
    let url = `${urlBase}/rest/v1/${URI}`;
    let headersAux = {...headers, 
        "Authorization" :"Bearer "+token,
        "Prefer" : "return=representation"
    };
    let response = await supaRequest(url,'PATCH',headersAux,data);
    return response;
}
async function createData(URI,token,data){
    let url = `${urlBase}/rest/v1/${URI}`;
    let headersAux = {...headers, 
        "Authorization" :"Bearer "+token,
        "Prefer" : "return=representation"
    };
    let response = await supaRequest(url,'post',headersAux,data);
    return response;
}