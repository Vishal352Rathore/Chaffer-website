export const isLoggedIn = () => {
    // Check if the token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        
        const decodedToken = decode(token);
        
        if (decodedToken.exp * 1000 > Date.now()) {
          return true; 
        } 
        else {
          // Token is expired
          localStorage.removeItem('token'); 
          return false; 
        }
      } 
      catch (error) {
        console.log("Error decoding token:", error);
        localStorage.removeItem('token'); 
        return false;
      }
    }
    return false; // User is not logged in
  };
  