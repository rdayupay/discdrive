import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';
import LeftSidebar from '@/components/LeftSidebar';
import DiscCard from '@/components/DiscCard';
import GridWrapper from '@/components/GridWrapper';
import { getDiscs } from '@/helpers/data';

const ProductPage = async ({ params }) => {
  const { categorySlug } = params;
  const selectedFilter = categorySlug === 'products' ? '' : categorySlug;

  const discs = await getDiscs(categorySlug);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-48 bg-gray-100">
        <LeftSidebar selectedFilter={selectedFilter} discs={discs} />
      </div>

      <div className="w-full ">
        <ModalContainer>
          <NewListingForm />
        </ModalContainer>

        <div className="p-5 ">
          <GridWrapper>
            {discs.map((disc) => (
              <DiscCard key={disc._id} disc={disc} />
            ))}
          </GridWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
