const localStorage = function() {
  const localStore = window.localStorage;
  
  return {
    setName(name, value) {  
      return localStore.setItem(name, value)
    },
    
    getName(name) {
      return localStore.getItem(name);
    },
    
    removeName(name) {
      return localStore.removeItem(name);
    }
  }
}

export default localStorage;