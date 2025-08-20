import { z } from "zod";

const ERR_MSG_REQUIRED = "必須入力項目です";

export const FormSchema = z.object({
  name: z.string().min(1, { message: ERR_MSG_REQUIRED }),
  email: z
    .string()
    .min(1, { message: ERR_MSG_REQUIRED })
    .email({ message: "正しいメールアドレスの形式で入力してください" }),
  message: z.string().min(1, { message: ERR_MSG_REQUIRED }),
});

export type FormType = z.infer<typeof FormSchema>;
