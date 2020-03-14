function setLocalstorage(key,val){
    for (let i = 0; i < key.length; i++) {
        localStorage.setItem(key[i],JSON.stringify(val[i]))  
    }
}
export {
    setLocalstorage
}