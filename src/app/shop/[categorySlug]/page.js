import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';

import DiscCard from '@/components/DiscCard';
import ArticleWrapper from './ArticleWrapper';

const getDiscs = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/discs', {
      method: 'GET',
      cache: 'no-store',
    });

    return res.json();
  } catch (err) {
    console.error('[discs_GET]', err);
  }
};

const ProductPage = async () => {
  const { discs } = await getDiscs();

  return (
    <>
      <ModalContainer>
        <NewListingForm />
      </ModalContainer>

      <div className="p-5 ">
        <ArticleWrapper>
          {discs.map((disc) => (
            <DiscCard key={disc._id} disc={disc} />
          ))}
        </ArticleWrapper>
      </div>
    </>
  );
};

export default ProductPage;
