import { useState } from "react";

export default function Input({
  placeholder,
  type,
  label,
  id,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2 py-2 w-full">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        required
        type={type || "text"}
        id={id}
        value={value}
        onChange={onChange}
        className="text-sm p-4 w-1/2 border border-white rounded w-full bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}
