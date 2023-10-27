import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { UserDetails } from '@/widgets/UserDetails';
import { StyledContent, StyledLayout } from './styles';

export const Main = () => (
  <StyledLayout>
    <Header />
    <StyledContent>
      <Sidebar />
      <UserDetails />
    </StyledContent>
  </StyledLayout>
);
