import styled from "styled-components";
import PageRoutes from "./pages/PageRoutes";

function App() {
  return (
    <Container>
      <PageRoutes />
    </Container>
  );
}

export const Container = styled.div`
  background: gray;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;
