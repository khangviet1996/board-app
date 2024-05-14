import Image from 'next/image';

import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Hint } from '@/components/hint';

type ItemProps = {
  name: string;
  imageUrl: string;
  id: string;
};

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { setActive } = useOrganizationList();
  const { organization } = useOrganization();

  const isActive = organization?.id === id;

  return (
    <div className='aspect-square relative'>
      <Hint content={name} side='right' align='start' sideOffset={18}>
        <Image
          fill
          className={cn(
            'rounded-lg cursor-pointer opacity-75 hover:opacity-100 transition',
            isActive && 'opacity-100'
          )}
          alt={name}
          src={imageUrl}
          onClick={() => setActive && setActive({ organization: id })}
        />
      </Hint>
    </div>
  );
};
