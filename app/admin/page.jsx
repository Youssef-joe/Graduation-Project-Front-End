import { useEffect, useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import api from '../utils/api';

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      const { data } = await api.get('/users/admin', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setAdminData(data);
    };
    fetchAdminData();
  }, []);

  return (
    <ProtectedRoute>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        {adminData && <p>{adminData.message}</p>}
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
