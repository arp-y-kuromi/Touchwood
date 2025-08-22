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
  required?: boolean;
} & UseControllerProps<T>;

export const FormTextField = <T extends FieldValues>({
  label,
  name,
  rows,
  placeholder,
  required = false,
  control,
}: FormTextFieldProps<T>) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4">
      {/* ラベルと必須/任意バッジ */}
      <div className="flex flex-col sm:inline-flex sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-6">
        <div className="justify-start text-[#4B5563] text-xl sm:text-2xl font-bold font-['Noto_Serif_JP'] leading-loose">
          {label}
        </div>
        <div
          className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full flex justify-center items-center gap-2.5 overflow-hidden ${
            required ? "bg-[#EF4444]" : "bg-[#9CA3AF]"
          }`}
        >
          <div className="justify-start text-white text-lg sm:text-xl font-bold font-['Noto_Serif_JP'] leading-7">
            {required ? "必須" : "任意"}
          </div>
        </div>
      </div>

      {/* 入力フィールド */}
      {rows ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className={`w-full h-40 sm:h-48 md:h-56 p-3 sm:p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] ${
            error ? "outline-[#8B5A3C]" : "outline-[#D1D5DB]"
          } inline-flex justify-start items-start gap-2.5 text-lg sm:text-xl font-bold font-['Noto_Serif_JP'] leading-7 ${
            rest.value ? "text-[#4B5563]" : "text-[#9CA3AF]"
          } focus:outline-none focus:outline-2 focus:outline-[#8B5A3C] resize-none`}
          ref={ref}
          {...rest}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full p-3 sm:p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] ${
            error ? "outline-[#8B5A3C]" : "outline-[#D1D5DB]"
          } inline-flex justify-start items-center gap-2.5 text-lg sm:text-xl font-bold font-['Noto_Serif_JP'] leading-7 ${
            rest.value ? "text-[#4B5563]" : "text-[#9CA3AF]"
          } focus:outline-none focus:outline-2 focus:outline-[#8B5A3C]`}
          ref={ref}
          {...rest}
        />
      )}

      {/* エラーメッセージ */}
      {error && (
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-6">
          <div className="w-full justify-start text-[#EF4444] text-sm font-black font-['Noto_Serif_JP'] leading-none">
            {error.message}
          </div>
        </div>
      )}
    </div>
  );
};
