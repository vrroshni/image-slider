/**
 * Input Component
 *
 * The Input component is used for rendering form input fields.
 * 
 */
const Input = ({
    errors,
    id,
    label,
    register,
    disabled,
    type = "text",
    placeholder,
    value = '',
    Validations,
}) => {

    const hasError = errors[id];

    return (
        <div>
            <label for={id} class="block mb-2 text-sm font-medium text-textcolor">
                {label}
            </label>
            <input
                defaultValue={value}
                type={type}
                id={id}
                class={`bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5             
                ${hasError ? "border-rose-500 focus:border-rose-500" : "focus:ring-blue-500 focus:border-blue-500"}`}
                {...register(id, Validations)}
                disabled={disabled}
                placeholder={placeholder}
            />
            {hasError && (
                <p className="text-red-500 text-sm"> {errors[id]?.message} </p>
            )}

        </div>
    );
};

export default Input;
