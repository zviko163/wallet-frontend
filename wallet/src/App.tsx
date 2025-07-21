import { useEffect } from 'react'
import { fetchUsers } from './api'

function App() {
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        
        console.log('Fetched users:', data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <>

    </>
  )
}

export default App
