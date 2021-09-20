import { RadioButton } from 'primereact/radiobutton';

export default function PollOptionChoice({option, label, isChecked, onChange}) {
  return (
    <div className="p-field-radiobutton mb-2">
      <RadioButton
        inputId={option}
        name="answer"
        value={option}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={option} className="ml-2">
        {label}
      </label>
    </div>
  );
}
