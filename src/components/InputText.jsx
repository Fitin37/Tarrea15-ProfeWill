const InputText = ({ type, name, label, placeholder, register, errors }) => (
  <div className="col-span-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      {...register(name)}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
        errors?.[name] ? "border-red-500" : "border-gray-300"
      }`}
    />
    {errors?.[name] && (
      <p className="mt-1 text-sm text-red-500">{errors[name].message}</p>
    )}
  </div>
);

export default InputText;
