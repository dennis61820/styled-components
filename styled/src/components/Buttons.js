import styled from "styled-components";

export const BasicStyle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* color: ${(props) => props.special && "red"}; */
  /* color: ${({ special }) => special && "red"}; */
  color: ${({ special }) => (special ? "red" : "blue")};
`;

export const ButtonStyle = styled.button`
  background: #645dff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 200px;
  margin: 1rem auto;
`;
export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 200px;
  margin: 1rem auto;
`;
export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  display: inline-block;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  &:hover {
    color: white;
    background: #645cff;
    transition: 0.35s ease-in-out;
  }
`;
