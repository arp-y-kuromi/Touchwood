import React from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  note: string;
  imageSrc: string;
  imageAlt: string;
}

const serviceData: ServiceItem[] = [
  {
    id: "catering-service",
    title: "出張料理",
    subtitle: "【プロの味を、あなただけの空間で】",
    description: `特別なひとときにふさわしい、レストランの味を、ご自宅で。
旬の食材を贅沢に使い、シェフが目の前で仕上げるコース料理。大切な記念日、ホームパーティー、企業の接待など、お客様のご希望に合わせたオーダーメイドの料理をご提供します。
「お店まで行けないけれど、きちんとおもてなしがしたい」「ゆっくりと人目を気にせず過ごしたい」そんな方のための、特別な出張料理サービスです。
お気軽にご相談ください。お見積り・ご提案は無料で承っております。`,
    note: "※アレルギー食材等ございましたら、ご予約時にお申し付けください。",
    imageSrc: "/images/service.png",
    imageAlt: "Service Image",
  },
  {
    id: "event-catering",
    title: "ケータリング",
    subtitle: "【イベント・パーティーを彩る本格ケータリングサービス】",
    description: `華やかに、上質に、そして心地よく。大切なご宴席やイベントに、プロの味とサービスをお届けします。
企業パーティー、レセプション、ウェディング二次会、周年イベントなど、20名〜100名以上の大規模なケータリングにも柔軟に対応。旬の食材を活かしたビュッフェ形式から、フィンガーフードまで。シーンに合わせてトータルにプロデュースいたします。
ご希望のスタイル・ご予算に応じたプランをご提案します。まずはお気軽にご相談ください。`,
    note: "※アレルギー食材等ございましたら、ご予約時にお申し付けください。",
    imageSrc: "/images/menu.png",
    imageAlt: "Menu Image",
  },
];

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="w-full lg:w-[685px] flex flex-col gap-4 lg:gap-6">
      {/* 画像セクション */}
      <div className="relative h-48 lg:h-96 flex justify-center items-center bg-System-Gray-White overflow-hidden rounded-none">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 685px"
        />
      </div>

      {/* コンテンツセクション */}
      <div className="bg-System-Gray-White px-4 lg:px-10 py-6 lg:py-8 rounded-lg flex flex-col gap-4 lg:gap-6">
        <header className="flex flex-col gap-3 lg:gap-4">
          <h3 className="text-xl lg:text-3xl text-Main-Green-2 font-bold">
            {service.title}
          </h3>
          <h4 className="text-base lg:text-xl text-Main-Green-2 font-bold leading-snug">
            {service.subtitle}
          </h4>
        </header>

        <div className="flex flex-col gap-3 lg:gap-4">
          <p className="text-sm lg:text-base text-Main-Green-2 font-bold leading-snug">
            {service.description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < service.description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <p className="text-xs lg:text-sm text-Main-Brown-2 font-semibold leading-tight">
            {service.note}
          </p>
        </div>
      </div>
    </article>
  );
};

const ServiceSection: React.FC = () => {
  return (
    <section className="my-6 lg:my-10 font-['Noto_Serif_JP']">
      <div className="px-4 lg:px-20 flex flex-col gap-8 lg:gap-16">
        <header>
          <h2 className="text-Main-Green-2 text-3xl lg:text-5xl font-black font-['Noto_Serif_JP']">
            Service
          </h2>
        </header>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
