import React from "react";
import Image from "next/image";

interface MenuCourse {
  id: string;
  title: string;
  items: string;
  price: string;
  description: string;
  note?: string;
}

const menuCourses: MenuCourse[] = [
  {
    id: "casual-course",
    title: "カジュアルコース",
    items: "4~5品",
    price: "6,000円",
    description: "アミューズ、前菜2品、メイン（豚or鴨）、デザート",
    note: "※メインは、プラス1500円で和牛に変更可能です。",
  },
  {
    id: "standard-course",
    title: "スタンダードコース",
    items: "7品",
    price: "8,000円",
    description:
      "アミューズ、前菜2品、温菜、メイン（豚or鴨）お米料理、デザート",
    note: "※メインは、プラス1500円で和牛に変更可能です。",
  },
  {
    id: "special-course",
    title: "スペシャルコース",
    items: "9品",
    price: "10,000円",
    description:
      "アミューズ2品、前菜2品、温菜、メイン（和牛）、お米料理、デザート、茶菓子",
  },
];

const allergyNote =
  "※アレルギー食材等ございましたら、ご予約時にお申し付けください。";

interface MenuCardProps {
  course: MenuCourse;
  isMobile?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({ course, isMobile = false }) => {
  const cardClasses = isMobile
    ? "border-b border-System-Gray-Gray-4 py-4 last:border-b-0"
    : "border-b border-System-Gray-Gray-4 pb-6";

  const titleClasses = isMobile
    ? "text-sm font-bold text-Main-Green-2"
    : "text-xl font-bold text-Main-Green-2";

  const priceClasses = isMobile
    ? "flex gap-4 text-sm font-bold text-Main-Green-2"
    : "flex gap-4 text-xl font-bold text-Main-Green-2";

  const descriptionClasses = isMobile
    ? "text-xs font-bold text-Main-Brown-2 leading-snug"
    : "text-base font-bold text-Main-Brown-2 mb-1";

  const noteClasses = isMobile
    ? "text-[10px] font-bold text-Main-Brown-2 leading-tight"
    : "text-sm font-bold text-Main-Brown-2";

  return (
    <div className={cardClasses}>
      <div className="flex justify-between items-center mb-2">
        <h3 className={titleClasses}>{course.title}</h3>
        <div className={priceClasses}>
          <span>{course.items}</span>
          <span>{course.price}</span>
        </div>
      </div>
      <p className={descriptionClasses}>{course.description}</p>
      {course.note && <p className={noteClasses}>{course.note}</p>}
    </div>
  );
};

const MenuImage: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex justify-center">
        <div className="relative h-52 w-72">
          <div className="absolute top-6 left-6 w-full h-48 bg-Main-Brown-3 z-0" />
          <Image
            src="/images/menu.jpeg"
            alt="Menu Image"
            width={288}
            height={192}
            className="absolute top-0 left-0 w-full h-48 object-cover z-10"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[939px] h-[609px]">
      <div className="absolute left-16 top-14 w-[875px] h-[553px] bg-Main-Brown-3 z-0" />
      <Image
        src="/images/menu.jpeg"
        alt="Menu Image"
        width={875}
        height={553}
        className="absolute top-0 left-0 w-[875px] h-[553px] object-cover z-10"
      />
    </div>
  );
};

const DesktopMenuSection: React.FC = () => {
  return (
    <div className="hidden lg:block font-['Noto_Serif_JP']">
      <div className="max-w-screen mx-auto px-20 py-16">
        <header className="mb-12">
          <h2 className="text-Main-Green-2 text-5xl font-black font-['Noto_Serif_JP']">
            Menu
          </h2>
        </header>

        <div className="flex gap-16 justify-center items-center">
          <div className="flex-1 bg-System-Gray-White p-6 rounded-md space-y-8 bg-white">
            {menuCourses.map((course) => (
              <MenuCard key={course.id} course={course} />
            ))}
            <p className="text-sm font-semibold text-Main-Brown-2 mt-4">
              {allergyNote}
            </p>
          </div>
          <MenuImage />
        </div>
      </div>
    </div>
  );
};

const MobileMenuSection: React.FC = () => {
  return (
    <div className="lg:hidden font-['Noto_Serif_JP'] pb-10">
      <div className="px-4 py-5">
        <MenuImage isMobile />
      </div>
      <header className="py-6">
        <h2 className="text-xl font-black text-Main-Green-2 text-center">
          Menu
        </h2>
      </header>

      <div className="px-4 py-6 bg-System-Gray-White mx-4 rounded-md space-y-4">
        {menuCourses.map((course) => (
          <MenuCard key={course.id} course={course} isMobile />
        ))}
        <p className="text-[10px] font-semibold text-Main-Brown-2 mt-4">
          {allergyNote}
        </p>
      </div>
    </div>
  );
};

const MenuSection: React.FC = () => {
  return (
    <>
      <DesktopMenuSection />
      <MobileMenuSection />
    </>
  );
};

export default MenuSection;
