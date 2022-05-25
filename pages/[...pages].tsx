import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Text from 'src/components/ui/Text';

const pagesTitle = (pages: string) => {
  if (pages === 'about') return 'About';
  if (pages === 'terms-of-use') return 'Terms of use';
  if (pages === 'shipping-returns') return 'Shipping & Returns';
  if (pages === 'privacy-policy') return 'Privacy Policy';
  return undefined;
};

export default function Pages() {
  const {
    query: { pages },
  } = useRouter();

  return (
    <PagesContainer>
      <Text title={pages ? pagesTitle(pages[0]) : undefined} />
    </PagesContainer>
  );
}

const PagesContainer = styled.div`
  width: 100%;
  max-width: 42rem;
  margin: 0 auto;
  padding: 5rem 0;
`;
