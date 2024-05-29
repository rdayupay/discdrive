import React from 'react';

import { range } from '@/lib/utils/utils';
import DiscCardSkeleton from '@/components/DiscCardSkeleton';
import GridWrapper from '@/components/GridWrapper';

function DiscsLoading() {
  return (
    <GridWrapper>
      {range(4).map((num) => (
        <DiscCardSkeleton key={num} />
      ))}
    </GridWrapper>
  );
}

export default DiscsLoading;
