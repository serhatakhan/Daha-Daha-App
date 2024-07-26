// Tag List Types
interface TagList {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}
interface TagListState {
  tagList: TagList[];
  pending: boolean;
  error: string | object;
}

// Promotions Types
interface Promotions {
  BrandIconColor?: string;
  BrandIconUrl?: string;
  BrandPromotionCardParticipationText?: string;
  CardType?: string;
  ExternalLoginGate?: null;
  ExternalRedirectType?: null;
  ExternalType?: null;
  ExternalUrl?: null;
  ExternalWebviewType?: null;
  Id?: number;
  ImageUrl?: string;
  IsLuckyDay?: boolean;
  ListButtonText?: string;
  ListButtonTextBackGroudColor?: string;
  LuckyDayBackgroundColor?: null;
  LuckyDayText?: string;
  LuckyDayTextColor?: null;
  PromotionCardColor?: string;
  RemainingText?: string;
  ScenarioType?: string;
  SeoName?: string;
  Title?: string;
  Unavailable?: boolean;
  Unvisible?: boolean;
}
interface PromotionsState {
  promotions: Promotions[];
  pending: boolean;
  error: string | object;
}

// Single Promotion Types
interface PromotionDetailItem {
  ClosedIconUrl: string;
  Description: string;
  OpenedIconUrl: string;
  PromotionDetailItems: any[]; //
  Title: string;
  UseMapButton: boolean;
}
interface PromotionGallery {
  CoverImageUrl: string;
  DocumentType: string;
  DocumentUrl: string;
}
interface Promotion {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  CardType: string;
  Contents: any[]; //
  CountryTimeZone: number;
  Description: string;
  DetailButtonText: string;
  EndDate: string;
  ExternalLoginGate: string | null;
  ExternalRedirectType: string | null;
  ExternalType: string | null;
  ExternalUrl: string | null;
  ExternalWebviewType: string | null;
  GameWin: string | null;
  Id: number;
  ImageUrl: string;
  IsMapAvailable: boolean;
  ListButtonText: string | null;
  LuckyDayBackgroundColor: string;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  NextFlowConfigurations: Record<string, any>;
  PromotionDetailItemAreas: PromotionDetailItem[];
  PromotionGalleries: PromotionGallery[];
  PromotionTags: any[];
  RemainingText: string;
  ScenarioType: string;
  SeoName: string;
  StartDate: string;
  Title: string;
  Type: string;
  Unavailable: boolean;
  Unvisible: boolean;
}
interface PromotionState {
  promotion: Promotion | null;
  loading: boolean;
  error: string | null;
}

export type {
  TagList,
  TagListState,
  Promotions,
  PromotionsState,
  Promotion,
  PromotionState,
};
