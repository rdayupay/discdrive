import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';
import LeftSidebar from '@/components/LeftSidebar';
import DiscCard from '@/components/DiscCard';
import GridWrapper from '@/components/GridWrapper';
import { WEBAPP_URL } from '@/lib/utils/WEBAPP_URL';

const getDiscs = async () => {
  try {
    const res = await fetch(`${WEBAPP_URL}/api/discs`, {
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
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-48 bg-gray-100">
        <LeftSidebar selectedFilter={params.categorySlug} discs={discs} />
      </div>

      <div className="w-full ">
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
      </div>
    </div>
  );
};

export default ProductPage;
