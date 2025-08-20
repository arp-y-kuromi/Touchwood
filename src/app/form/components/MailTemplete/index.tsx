type EmailTemplatePropsType = {
  userName: string;
  email: string;
  content: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplatePropsType>> = ({
  userName,
  email,
  content,
}) => {
  return (
    <div>
      <h3>お問い合わせがありました</h3>
      <p>
        <strong>名前:</strong> {userName}
      </p>
      <p>
        <strong>メールアドレス:</strong> {email}
      </p>
      <p>
        <strong>内容:</strong>
      </p>
      <p>{content}</p>
    </div>
  );
};
