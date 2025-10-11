import { ServiceItem } from "../types/service";

export const serviceData: ServiceItem[] = [
  {
    id: "catering-service",
    title: "出張料理",
    subtitle: "",
    description: null,
    note: "",
    imageSrc: ["/images/main1.JPG", "/images/menu2.jpeg"],
    imageAlt: "出張料理サービス",
    courses: [
      {
        name: "お試しコース（ショートコース）",
        price: "6,300円/人",
        details: "最低人数：4人～\n形式：出張料理",
      },
      {
        name: "南仏の風を感じる｜シェフオリジナルコース",
        price: "7,500円/人",
        details:
          "最低人数：4人～20人\n形式：出張料理（地中海ベース）\nコース内容：アミューズブッシュ・冷前菜・温前菜・魚料理・肉料理・本日のデザート",
      },
      {
        name: "《季節限定》シェフオリジナルのフルコース",
        price: "9,900円/人",
        details: "最低人数：3人～\n形式：出張料理",
      },
      {
        name: "スペシャルディナーコース（記念日や誕生日向け）",
        price: "13,000円/人",
        details: "最低人数：2人～\n形式：出張料理",
      },
    ],
    content:
      "ご自宅にいながらも、まるでレストランにいるかのようなひとときを。\n地中海の料理をベースとした、ホッとする料理をお届けします。",
  },
  {
    id: "event-catering",
    title: "ケータリング",
    subtitle: "",
    description: null,
    note: "",
    imageSrc: ["/images/catering1.jpeg", "/images/catering2.jpeg"],
    imageAlt: "ケータリングサービス",
    courses: [
      {
        name: "ケータリングプラン（フィンガーフードから大皿料理まで対応可）",
        price: "",
        details:
          "料金：4000〜円／人（20名以上の予約での価格）\n最低人数：5人〜200人\n形式：ケータリング\nメニュー例：前菜3品＋パスタ1品＋メイン1品、またはピンチョス＋メイン or パスタ＋デザート等（自由にアレンジ可）",
      },
    ],
    content:
      "イベント、ポップアップ、結婚式の2次会や大人数での会食、レンタルスペースをご利用の際など様々なシーンでご利用いただけます。\n100名様以上もご対応可能です。",
  },
];
