import { WEBAPP_URL } from '@/lib/utils/WEBAPP_URL';

export async function getDiscs(
  categorySlug,
  colorFilter = '',
  sortAttribute = ''
) {
  try {
    const queryParams = new URLSearchParams();
    if (colorFilter) {
      queryParams.append('color', colorFilter);
    }
    if (sortAttribute) {
      queryParams.append('sort', sortAttribute);
    }

    const res = await fetch(
      `${WEBAPP_URL}/api/discs?${queryParams.toString()}`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch discs');
    }

    let discs = await res.json();

    if (categorySlug !== 'products') {
      discs = discs.filter((disc) => disc.discType === categorySlug);
    }

    return discs;
  } catch (err) {
    console.error('[discs_GET]', err);
    return [];
  }
}
