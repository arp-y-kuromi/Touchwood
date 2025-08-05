import React from "react";

const Content: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 py-12 gap-6 md:max-w-5xl md:mx-auto md:px-0 md:py-32 md:gap-16">
      <div className="w-full text-center text-Main-Green-2 font-normal font-['Croissant_One'] text-xl md:text-5xl">
        Touch wood
      </div>

      <div className="w-full text-center text-Main-Green-2 font-black font-['Noto_Serif_JP'] leading-none md:text-2xl md:leading-9">
        <span className="text-xs md:text-2xl block">
          Wishing you all the best.
        </span>
        <span className="text-[10px] md:text-2xl block">
          ～お客様の日常に、小さな幸せと、ほっとできる時間を～
        </span>
      </div>

      <div className="w-full text-center text-Main-Green-2 font-semibold font-['Noto_Serif_JP'] text-xs md:text-xl md:leading-9 space-y-2">
        <p>
          お客様の毎日をちょっと明るくしてくれる、
          <br className="block md:hidden" />
          そんな&quot;ささやかな幸運&quot;になればと思っています。
        </p>
        <p>
          スペインやフランスの地中海料理を中心に、
          <br />
          太陽と風を感じるような一皿を、
          <br className="block md:hidden" />
          カジュアルにご用意しております。
        </p>
        <br className="block md:hidden" />
        <p>食べることを楽しむのはもちろん、</p>
        <p>大切な人との会話や、ひとり時間も心地よく過ごせるように。</p>
        <p>店内でのご提供に加え、ご自宅やオフィスでも</p>
        <p>
          本格的な味を楽しんでいただける
          <br className="block md:hidden" />
          出張・ケータリングプランもご用意。
        </p>
        <br className="block md:hidden" />
        <p>
          ご家族との食事、記念日、企業パーティーなど、
          <br className="block md:hidden" />
          さまざまなシーンに合わせてご利用いただけます。
        </p>
        <p>温かく、心に残る時間をお届けします。</p>
      </div>
    </div>
  );
};

export default Content;
