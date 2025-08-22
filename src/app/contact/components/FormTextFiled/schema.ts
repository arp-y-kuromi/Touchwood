import { z } from "zod";

const ERR_MSG_REQUIRED = "必須入力項目です";

export const FormSchema = z.object({
  name: z.string().min(1, { message: "氏名を入力してください。" }),
  email: z
    .string()
    .min(1, { message: ERR_MSG_REQUIRED })
    .email({ message: "正しいメールアドレスの形式で入力してください。" }),
  phone: z
    .string()
    .min(1, { message: ERR_MSG_REQUIRED })
    .refine((val) => /^\d{3}-\d{4}-\d{4}$/.test(val), {
      message: "正しい電話番号の形式で入力してください。",
    }),
  message: z.string().optional(),
});

export type FormType = z.infer<typeof FormSchema>;
