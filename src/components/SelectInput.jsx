const SelectInput = ({ label, options, name, register, errors }) => (
  <div className="col-span-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      id={name}
      {...register(name)}
      className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
        errors?.[name] ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Selecciona una opción</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    {errors?.[name] && (
      <p className="mt-1 text-sm text-red-500">{errors[name].message}</p>
    )}
  </div>
);

export default SelectInput;
