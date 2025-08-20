"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="mt-24">
        <div className="mt-24 text-center px-4">
          <p className="text-gray-700 text-lg mt-4">
            お問い合わせありがとうございます。
            <br />
            内容を確認し次第、担当者よりご連絡いたします。
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleGoHome}
              className="mt-6 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              トップに戻る
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
