import styled from "styled-components"

export const NotFound404Layout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.NotFound404};
  user-select: none;
`

export const NoFound404ContainerBackground = styled.div`
  width: 50rem;
  height: 46rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.sub};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
`
export const NoFound404Container = styled.div`
  width: 46rem;
  height: 42rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
`

export const NotFound404Title = styled.h2`
  width: 44rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.point};
`
export const NotFound404Text = styled.p`
  width: 32rem;
  height: 6rem;

  white-space: pre-wrap;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const NotFound404Image = styled.div<{ $src: string }>`
  width: 20rem;
  height: 20rem;

  background-image: url(${({ $src }) => $src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 0.4rem solid ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
`

export const NotFound404ButtonContainer = styled.div`
  width: 44rem;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotFound404Button = styled.button`
  width: 10rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);

  font-size: 2.4rem;

  transition: ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
