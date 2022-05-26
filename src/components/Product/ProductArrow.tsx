import styled from '@emotion/styled';
import ArrowLeft from '../ui/icons/ArrowLeft';
import ArrowRight from '../ui/icons/ArrowRight';

interface ProductArrowProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function ProductArrow({ onPrev, onNext }: ProductArrowProps) {
  return (
    <ProductArrowContainer>
      <button onClick={onPrev}>
        <ArrowLeft />
      </button>
      <button onClick={onNext}>
        <ArrowRight />
      </button>
    </ProductArrowContainer>
  );
}

const ProductArrowContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 30;
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-color: white;
  color: white;
  height: 48px;
  button {
    background: #7928ca;
    cursor: pointer;
    padding: 0 2.25rem;
    :hover {
      background: #4c2889;
    }
  }
`;