import axios from 'axios';
const LoginTry=()=>{
  
       axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
        // Now we can make authenticated requests like login
       axios.post('http://127.0.0.1:8000/api/login', {
          email: 'johntest@gmail.com',
          password: 'securePassword',
        }) .then(response => {
          console.log('Login success:', response.data);
        
        
            const userResponse= axios.get('http://127.0.0.1:8000/api/user',{withCredentials:true})
            .then(userResponse=>{
                console.log(response.data);
            })
            
        
        .catch(err=>{
            console.error("user not fetched",err);
        });
         
        })
        .catch(error => {
          console.error('Login error:', error);
        });
      
     
       
    });
    
      
}


export default LoginTry;