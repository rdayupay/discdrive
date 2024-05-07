import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';

import DiscCard from '@/components/DiscCard';
import GridWrapper from '@/components/GridWrapper';
import { WEBAPP_URL } from '@/lib/utils/WEBAPP_URL';

const getDiscs = async () => {
  try {
    const res = await fetch(WEBAPP_URL + '/api/discs', {
      method: 'GET',
      cache: 'no-store',
    });

    return res.json();
  } catch (err) {
    console.error('[discs_GET]', err);
  }
};

const filterDiscsByType = (discs, categorySlug) =>
  categorySlug !== 'products'
    ? discs.filter((disc) => disc.discType === categorySlug)
    : discs;

const ProductPage = async ({ params }) => {
  const { discs } = await getDiscs();

  const filteredDiscs = filterDiscsByType(discs, params.categorySlug);

  return (
    <>
      <ModalContainer>
        <NewListingForm />
      </ModalContainer>

      <div className="p-5 ">
        <GridWrapper>
          {filteredDiscs.map((disc) => (
            <DiscCard key={disc._id} disc={disc} />
          ))}
        </GridWrapper>
      </div>
    </>
  );
};

export default ProductPage;
