const API_BASE = import.meta.env.VITE_API_URL;

// fetching users
export async function fetchUsers() {
  try {
    const response = await fetch(`${API_BASE}/users/findAll`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Fetching users from:', `${API_BASE}/users/findAll`);
    return await response.json();

  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
