import { WEBAPP_URL } from '@/lib/utils/WEBAPP_URL';

export async function getDiscs(categorySlug, colorFilter = '') {
  try {
    const queryParams = new URLSearchParams();
    if (colorFilter) {
      queryParams.append('color', colorFilter);
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

    const discs = await res.json();

    const filteredDiscs =
      categorySlug !== 'products'
        ? discs.filter((disc) => disc.discType === categorySlug)
        : discs;

    return filteredDiscs;
  } catch (err) {
    console.error('[discs_GET]', err);
    return [];
  }
}
