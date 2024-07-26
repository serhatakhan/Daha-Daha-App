import {createSelector} from 'reselect';
import {RootState} from '../store';
import {decode} from 'html-entities';

const selectTagListState = (state: RootState) => state.tagList;
const selectPromotionsState = (state: RootState) => state.promotions;
// * useSelector'un her render'da farklı bir referans döndürmesi yerine, reselect ile
// her render'da aynı referansı döndürerek gereksiz yeniden renderları önlemiş olduk.
export const selectTagListAndPromotions = createSelector(
  [selectTagListState, selectPromotionsState],
  (tagList, promotions) => ({
    tagList,
    promotions,
  }),
);

// Kalan günü hesapla
export const calculateRemainingDays = (remainingDate: string): number => {
  const today = new Date();
  const targetDate = new Date(remainingDate.split('.').reverse().join('-'));

  const timeDiff = targetDate.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return dayDiff;
};

// HTML etiketlerini ve HTML entity'lerini kaldır
export const removeHtmlTagsAndEntities = (html?: string): string => {
  // Eğer html boş veya sadece nokta içeriyorsa varsayılan metni dön
  if (!html || html.trim() === '' || html.replace(/<\/?[^>]+(>|$)/g, '').trim() === '.') {
    return 'Hemen Katıl';
  }
  // HTML etiketlerini kaldır
  const textWithoutTags = html.replace(/<\/?[^>]+(>|$)/g, '');
  // HTML entity'lerini dönüştür
  return decode(textWithoutTags);
};
