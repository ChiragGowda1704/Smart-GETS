const API_URL = ''; // Base URL - empty means same domain

// Helper function to get auth header
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Generic fetch function with authentication
const fetchWithAuth = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  
  // Merge default headers with provided options
  const headers = {
    'Content-Type': 'application/json',
    ...getAuthHeader(),
    ...(options.headers || {})
  };
  
  const config = {
    ...options,
    headers
  };
  
  try {
    const response = await fetch(url, config);
    
    // Handle unauthorized responses (expired token, etc.)
    if (response.status === 401 && localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/auth'; // Redirect to login
      throw new Error('Session expired. Please log in again.');
    }
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

// Auth API calls
const auth = {
  login: (credentials) => {
    return fetchWithAuth('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },
  
  register: (userData) => {
    return fetchWithAuth('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },
  
  getProfile: () => {
    return fetchWithAuth('/api/auth/profile');
  }
};

// Grocery API calls
const groceries = {
  getAll: () => {
    return fetchWithAuth('/api/groceries');
  },
  
  getById: (id) => {
    return fetchWithAuth(`/api/groceries/${id}`);
  },
  
  add: (groceryData) => {
    return fetchWithAuth('/api/groceries/add', {
      method: 'POST',
      body: JSON.stringify(groceryData)
    });
  },
  
  update: (id, groceryData) => {
    return fetchWithAuth(`/api/groceries/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify(groceryData)
    });
  },
  
  delete: (id) => {
    return fetchWithAuth(`/api/groceries/delete/${id}`, {
      method: 'DELETE'
    });
  },
  
  getExpiringSoon: () => {
    return fetchWithAuth('/api/groceries/expiring-soon');
  },
  
  deleteExpired: () => {
    return fetchWithAuth('/api/groceries/delete-expired', {
      method: 'DELETE'
    });
  }
};

const apiService = {
  auth,
  groceries
};

export default apiService;