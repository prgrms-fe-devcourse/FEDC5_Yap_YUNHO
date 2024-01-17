import styled from "styled-components"

export const SelectContainer = styled.div`
  width: 9rem;
  position: relative;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;

  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

export const SelectTextContainer = styled.div`
  width: 9rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  padding-left: 1rem;

  svg {
    font-size: 3rem;
  }
`

export const OptionConatiner = styled.div<{ $isVisible: boolean }>`
  width: 8.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 4rem;

  border-radius: 0.5rem 0.5rem 0.2rem 0.2rem;

  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  margin-left: 0.1rem;

  z-index: 1;

  transition:
    opacity 0.3s ease,
    visibility 0.1s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`

export const OptionButton = styled.button`
  height: 5rem;

  display: flex;
  align-items: center;
  padding-left: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
