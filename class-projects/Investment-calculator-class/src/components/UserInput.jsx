export default function UserInput({ textLabel, data, onInputsChange, dataId }) {
  return (
    <p>
      <label htmlFor="">{textLabel}</label>
      <input
        type="number"
        value={data}
        onChange={(e) => {
          onInputsChange(dataId, e.target.value);
        }}
      />
    </p>
  );
}
