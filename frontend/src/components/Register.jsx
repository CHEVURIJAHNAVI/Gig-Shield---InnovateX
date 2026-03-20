import React, { useState } from 'react';
import { registerUser } from '../api';

function Register({ onSuccess }) {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', upiId: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data } = await registerUser(formData);
      onSuccess(data.userId);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: '8px' }}>Create Your Account</h2>
      <p style={{ color: '#8b949e', marginBottom: '24px', fontSize: '14px' }}>Join GigShield for instant income protection.</p>
      
      {error && <div className="error-alert">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input required type="text" placeholder="Ravi Kumar"
            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </div>
        
        <div className="input-group">
          <label>Phone Number</label>
          <input required type="tel" placeholder="9876543210"
            value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        </div>

        <div className="input-group">
          <label>City</label>
          <input required type="text" placeholder="Hyderabad"
            value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
        </div>

        <div className="input-group">
          <label>UPI ID (For payouts)</label>
          <input required type="text" placeholder="ravi@ybl"
            value={formData.upiId} onChange={e => setFormData({ ...formData, upiId: e.target.value })} />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '16px' }}>
          {loading ? 'Creating Account...' : 'Continue to Plan Selection ➔'}
        </button>
      </form>
    </div>
  );
}

export default Register;
