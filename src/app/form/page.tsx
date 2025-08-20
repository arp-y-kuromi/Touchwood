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
          content: data.message,
        }),
      });
      reset({
        name: "",
        email: "",
        message: "",
      });
      router.push("/form/success");
    } catch {
      alert("エラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-lg mx-auto">
      <FormTextField
        name="name"
        label="名前"
        placeholder="名前"
        control={control}
      />
      <FormTextField
        name="email"
        label="メールアドレス"
        placeholder="xxxxxxx@xx.xx"
        control={control}
      />
      <FormTextField
        name="message"
        label="お問い合わせ内容"
        rows={4}
        placeholder="ご質問・ご相談内容をご記入ください"
        control={control}
      />
      <div className="flex justify-center">
        <button
          id="form-button"
          type="submit"
          disabled={isSubmitting}
          className="bg-[linear-gradient(90deg,_#215C9E_0%,_#0D396B_100%)] text-white font-semibold rounded-full px-6 py-3 mb-4
    hover:bg-[linear-gradient(90deg,_#3a78d1_0%,_#1a579a_100%)]
    disabled:bg-[linear-gradient(90deg,_#3a78d1_0%,_#1a579a_100%)]
    hover:shadow-lg transition"
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
}
