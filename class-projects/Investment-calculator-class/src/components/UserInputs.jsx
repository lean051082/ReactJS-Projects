import UserInput from './UserInput';

export default function UserInputs({ data, onInputsChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          textLabel="initial investment"
          data={data.initialInvestment}
          onInputsChange={onInputsChange}
          dataId="initialInvestment"
        />
        <UserInput
          textLabel="annual investment"
          data={data.annualInvestment}
          onInputsChange={onInputsChange}
          dataId="annualInvestment"
        />
      </div>
      <div className="input-group">
        <UserInput
          textLabel="expected return"
          data={data.expectedReturn}
          onInputsChange={onInputsChange}
          dataId="expectedReturn"
        />
        <UserInput
          textLabel="duration"
          data={data.duration}
          onInputsChange={onInputsChange}
          dataId="duration"
        />
      </div>
    </section>
  );
}
