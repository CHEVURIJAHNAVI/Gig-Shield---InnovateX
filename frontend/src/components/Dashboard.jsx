import React, { useEffect, useState } from 'react';
import { getDashboard, simulateTrigger } from '../api';
import Toast from './Toast';

function Dashboard({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [simulating, setSimulating] = useState(false);
  const [toast, setToast] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getDashboard(userId);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [userId]);

  const handleSimulate = async () => {
    setSimulating(true);
    try {
      const res = await simulateTrigger({ userId, triggerType: 'Rain' });
      setToast({ message: res.data.message, type: res.data.payoutStatus === 'Paid' ? 'success' : 'warning' });
      await fetchData(); // Refresh dashboard
    } catch (err) {
      setToast({ message: err.response?.data?.message || 'Simulation failed', type: 'error' });
    } finally {
      setSimulating(false);
    }
  };

  if (loading) return <div>Loading dashboard...</div>;
  if (!data || !data.user) return <div>Error loading dashboard.</div>;

  const { user, riskLevel, totalPayout, claims } = data;

  return (
    <div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2>Welcome back, {user.name.split(' ')[0]} 👋</h2>
          <p style={{ color: '#8b949e', marginTop: '4px' }}>Zone: {user.city} · UPI: {user.upiId}</p>
        </div>
        
        {/* 🔥 CORE FEATURE: Simulate Button */}
        <button 
          className="btn btn-simulate"
          onClick={handleSimulate}
          disabled={simulating}
        >
          {simulating ? 'Simulating...' : '🌧️ Simulate Heavy Rain'}
        </button>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">🛡️ Active Plan</div>
          <div className="stat-val">{user.selectedPlan} Shield</div>
          <div className="stat-sub">Max ₹{user.planCoverage}</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">💸 Income Protected</div>
          <div className="stat-val text-green">₹{totalPayout}</div>
          <div className="stat-sub">Paid instantly to UPI</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">🤖 AI Risk Forecast</div>
          <div className={`stat-val ${riskLevel === 'HIGH' ? 'text-red' : 'text-green'}`}>
            {riskLevel} RISK
          </div>
          <div className="stat-sub">Based on weather data</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Claim History ({claims.length})</h3>
        
        {claims.length === 0 ? (
          <p style={{ color: '#8b949e', textAlign: 'center', padding: '24px 0' }}>No claims yet.</p>
        ) : (
          <div className="claim-list">
            {claims.map((claim) => (
              <div key={claim._id} className="claim-item">
                <div className="claim-icon">🌧️</div>
                <div className="claim-info">
                  <div className="claim-title">{claim.triggerType} Disruption</div>
                  <div className="claim-meta">
                    {new Date(claim.timestamp).toLocaleString()} · ID: {claim.transactionId || 'Pending'}
                  </div>
                </div>
                <div className="claim-amount">
                  <div className="amt text-green">+₹{claim.amount}</div>
                  <div className="status">{claim.payoutStatus}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;
