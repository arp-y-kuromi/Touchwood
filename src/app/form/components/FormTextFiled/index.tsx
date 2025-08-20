"use client";

import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type FormTextFieldProps<T extends FieldValues> = {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
} & UseControllerProps<T>;

export const FormTextField = <T extends FieldValues>({
  label,
  name,
  rows,
  placeholder,
  control,
}: FormTextFieldProps<T>) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="mb-4 w-full max-w-md font-sans">
      <label className="block text-gray-800 font-semibold mb-2 text-sm sm:text-base">
        {label}
      </label>
      {rows ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="w-full border-2 border-solid border-[#d1d5db] p-2 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          ref={ref}
          {...rest}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border-2 border-solid border-[#d1d5db] p-2 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          ref={ref}
          {...rest}
        />
      )}

      {error && (
        <p className="mt-1 text-red-600 text-xs whitespace-pre-wrap">
          {error.message}
        </p>
      )}
    </div>
  );
};
