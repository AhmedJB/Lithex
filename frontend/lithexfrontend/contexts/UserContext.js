import React , {useState , useContext , createContext} from 'react';


export const UserContext = createContext();

export const UserProvider = props => {

    let obj = {
		id : null,
        logged : false,
        username : null,
		joined : null,
        isA : false,
        path : null,
        email : null,
    }
    
    const [user,setUser] = useState(obj);

    return <UserContext.Provider value= {[user,setUser]}>{props.children}</UserContext.Provider>

}