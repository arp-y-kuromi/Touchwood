// メインコンポーネント
export { default as ServiceSection } from "./components/ServiceSection";
export { default as ServiceCard } from "./components/ServiceCard";

// 型定義
export type { ServiceItem, ServiceCardProps } from "./types/service";

// データ
export { serviceData } from "./data/serviceData";

// フック
export { useIntersectionObserver } from "./hooks/useIntersectionObserver";
