type EmailTemplatePropsType = {
  userName: string;
  email: string;
  phone: string;
  content: string;
};

export const EmailTemplate = ({
  userName,
  email,
  phone,
  content,
}: Readonly<EmailTemplatePropsType>): string => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h3>お問い合わせがありました</h3>
      <p>
        <strong>氏名:</strong> ${userName}
      </p>
      <p>
        <strong>メールアドレス:</strong> ${email}
      </p>
      <p>
        <strong>電話番号:</strong> ${phone}
      </p>
      <p>
        <strong>お問い合わせ内容:</strong>
      </p>
      <p>${content}</p>
    </div>
  `;
};
