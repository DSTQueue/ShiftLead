"use client";

export function TextInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <label className="font-semibold text-sm mb-1">{label}</label>
      <input {...props} className="border p-2 rounded" />
    </div>
  );
}

export function SelectInput({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <label className="font-semibold text-sm mb-1">{label}</label>
      <select value={value} onChange={onChange} className="border p-2 rounded">
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2" >
      {children}
    </button>
  );
}
