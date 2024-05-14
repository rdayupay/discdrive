import { WEBAPP_URL } from '@/lib/utils/WEBAPP_URL';

export async function getDiscs(categorySlug) {
  try {
    const res = await fetch(`${WEBAPP_URL}/api/discs`, {
      method: 'GET',
      cache: 'no-store',
    });

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
