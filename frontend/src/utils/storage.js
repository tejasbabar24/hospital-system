export const setAuth = ( token , expiresIn )=>{
    const expiry = new Date().getTime() + expiresIn * 1000;

    localStorage.setItem('auth' , JSON.stringify({ token , expiry}));
}

export const getAuth =()=>{
    const authData = JSON.parse(localStorage.getItem('auth'));

    if(!authData) return null;

    if( new Date().getTime() > authData.expiry){
        localStorage.removeItem('auth');
        return null;
    }

    return authData
}

export const clearAuth =()=>{
    localStorage.removeItem('auth');
}