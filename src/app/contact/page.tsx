"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormTextField } from "./components/FormTextFiled";
import { FormSchema, FormType } from "./components/FormTextFiled/schema";

export default function Page() {
  const { control, handleSubmit, reset } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormType) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: data.name,
          email: data.email,
          phone: data.phone,
          content: data.message,
        }),
      });

      router.push("/contact/success");

      setTimeout(() => {
        reset({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 1000);
    } catch {
      alert("エラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-8 sm:py-12 md:py-16">
        {/* タイトル */}
        <div className="text-center text-Main-Green-2 text-xl md:text-3xl font-black font-['Noto_Serif_JP'] leading-9 pb-5 md:pb-10">
          お問い合わせ
        </div>

        {/* フォーム */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto px-4 sm:px-8 md:px-16 lg:px-44 flex flex-col justify-start items-center gap-4 sm:gap-6"
        >
          <FormTextField
            name="name"
            label="氏名"
            placeholder="山田太郎"
            control={control}
            required={true}
          />

          <FormTextField
            name="email"
            label="メールアドレス"
            placeholder="XXXXXXXXX＠XXXX.com"
            control={control}
            required={true}
          />

          <FormTextField
            name="phone"
            label="電話番号"
            placeholder="000-0000‐0000"
            control={control}
            required={true}
          />

          <FormTextField
            name="message"
            label="お問い合わせ内容"
            rows={4}
            placeholder="お問い合わせ内容を入力してください。"
            control={control}
            required={false}
          />

          <button
            id="form-button"
            type="submit"
            disabled={isSubmitting}
            className="px-8 sm:px-12 md:px-16 py-3 sm:py-4 bg-Main-Brown-2 rounded-full inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-[#7A4A32] disabled:bg-[#7A4A32] disabled:opacity-50 transition-colors mt-4 sm:mt-6"
          >
            <div className="text-center justify-start text-white text-lg sm:text-xl font-bold font-['Noto_Serif_JP']">
              {isSubmitting ? "送信中..." : "確認する"}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
