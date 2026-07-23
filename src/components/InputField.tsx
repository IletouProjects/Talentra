import type {
  ChangeEvent,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from "react";

type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  error?: string;
  disabled?: boolean;
  required?: boolean;
};

function InputField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  error,
  disabled = false,
  required = false,
}: InputFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-[#344054]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#D92D20]" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={[
          "mt-2 w-full rounded-lg border bg-white px-4 py-3",
          "text-[#172033] outline-none transition",
          "placeholder:text-[#98A2B3]",
          "disabled:cursor-not-allowed disabled:bg-[#F2F4F7]",
          error
            ? "border-[#F04438] focus:border-[#D92D20] focus:ring-4 focus:ring-[#FEE4E2]"
            : "border-[#D0D5DD] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]",
        ].join(" ")}
      />

      {error && (
        <p
          id={errorId}
          className="mt-2 text-sm font-medium text-[#D92D20]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;