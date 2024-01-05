interface SelectProps {
  label: string;
  text: string;
  options: Array<{ text: string; val: string }>;
}
export default function Select({ label, text, options }: SelectProps) {
  return (
    <div className='m-auto flex w-full justify-between'>
      <label htmlFor={label}>{text}: </label>
      <select name='Selector' id={label} className='bg-transparent'>
        {options.map(({ text, val }) => (
          <option value={val}>{text}</option>
        ))}
      </select>
    </div>
  );
}
