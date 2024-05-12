import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover,
  &:focus {
    background-color: #0056b3;
  }
`;
