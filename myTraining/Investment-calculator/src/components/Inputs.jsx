export default function Inputs({ onInputChange, userData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>{userData.initialInvestment.title}</label>
          <input
            type="number"
            value={userData.initialInvestment.value}
            onChange={(e) =>
              onInputChange(Number(e.target.value), 'initialInvestment')
            }
          />
        </p>
        <p>
          <label>{userData.annualInvestment.title}</label>
          <input
            type="number"
            value={userData.annualInvestment.value}
            onChange={(e) =>
              onInputChange(Number(e.target.value), 'annualInvestment')
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>{userData.expectedReturn.title}</label>
          <input
            type="number"
            value={userData.expectedReturn.value}
            onChange={(e) =>
              onInputChange(Number(e.target.value), 'expectedReturn')
            }
          />
        </p>
        <p>
          <label>{userData.duration.title}</label>
          <input
            type="number"
            value={userData.duration.value}
            onChange={(e) =>
              onInputChange(
                Number(e.target.value) > 0 ? Number(e.target.value) : 1,
                'duration'
              )
            }
          />
        </p>
      </div>
    </section>
  );
}
