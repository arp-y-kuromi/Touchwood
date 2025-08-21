"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="w-full md:min-h-screen">
      <div className="mx-autopx-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-8 sm:py-12 md:py-16">
        {/* メインタイトル */}
        <div className="text-center text-Main-Green-2 text-3xl sm:text-4xl md:text-5xl font-black font-['Noto_Serif_JP'] leading-tight mb-8 sm:mb-12 md:mb-16">
          お問い合わせ
        </div>

        {/* コンテンツエリア */}
        <div className="mx-auto max-w-6xl px-4 sm:px-8 md:px-16 lg:px-44 bg-white">
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16 rounded-lg shadow-sm flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12">
            {/* サブタイトル */}
            <div className="text-center text-Main-Green-2 text-2xl sm:text-3xl font-black font-['Noto_Serif_JP'] leading-tight">
              お問い合わせありがとうございます
            </div>

            {/* メッセージ */}
            <div className="text-center text-Main-Green-2 text-lg sm:text-xl font-bold font-['Noto_Serif_JP'] leading-relaxed">
              この度はTouchwoodへお問い合わせいただき、誠にありがとうございます。
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              通常、2～3営業日以内にお返事いたしますが、
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              内容によりお時間をいただく場合がございます。あらかじめご了承ください。
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              引き続きTouch woodをよろしくお願いいたします。
            </div>

            {/* ホームボタン */}
            <div className="mt-4 sm:mt-6">
              <button
                onClick={handleGoHome}
                className="px-8 sm:px-12 md:px-16 py-3 sm:py-4 bg-Main-Brown-2 rounded-full inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-[#7A4A32] transition-colors"
              >
                <div className="text-center text-white text-lg sm:text-xl font-bold font-['Noto_Serif_JP']">
                  トップに戻る
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
