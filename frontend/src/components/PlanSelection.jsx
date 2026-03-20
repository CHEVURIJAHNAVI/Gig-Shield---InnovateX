import React, { useState } from 'react';
import { selectPlan } from '../api';

const PLANS = [
  { id: 'Basic', price: 30, coverage: 500, features: ['Rain', 'Heat'] },
  { id: 'Standard', price: 55, coverage: 1000, features: ['Rain', 'Heat', 'AQI'], recommended: true },
  { id: 'Full', price: 90, coverage: 2000, features: ['All 5 Triggers'] },
];

function PlanSelection({ userId, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSelect = async (plan) => {
    setLoading(true);
    setError('');
    try {
      await selectPlan({ userId, plan });
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to activate plan');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Choose Your Weekly Shield</h2>
      <p style={{ textAlign: 'center', color: '#8b949e', marginBottom: '32px' }}>
        Protect your income from weather & disruptions.
      </p>

      {error && <div className="error-alert">{error}</div>}

      <div className="plan-grid">
        {PLANS.map((plan) => (
          <div key={plan.id} className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
            {plan.recommended && <div className="reco-badge">Most Popular</div>}
            
            <h3>{plan.id} Shield</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/week</span>
            </div>
            
            <div className="coverage-badge">
              Up to ₹{plan.coverage} payout limit
            </div>

            <ul className="feature-list">
              {plan.features.map((f, i) => (
                <li key={i}>✓ Covers {f}</li>
              ))}
            </ul>

            <button 
              className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => handleSelect(plan.id)}
              disabled={loading}
              style={{ width: '100%', marginTop: 'auto' }}
            >
              {loading ? 'Activating...' : `Activate ${plan.id}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanSelection;
