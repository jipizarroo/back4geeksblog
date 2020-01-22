const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            
            path: 'http://localhost:5000',
            username: '',
            password: '',
            currentUser: {}
        },
        actions: {
            getLogin: (history) => {
                const store = getStore();
                const data = {
                    username: store.username,
                    password: store.password,
                }
                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setStore({
                        username: '',
                        password: '',
                        currentUser: data
                    });
                    history.push('/home')
                })
                
            },
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            }
        }
    }
}

export default getState;