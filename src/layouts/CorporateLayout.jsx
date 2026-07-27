import { Outlet } from 'react-router-dom';
import CorporateNavbar from '../components/CorporateNavbar/CorporateNavbar';
import CorporateFooter from '../components/CorporateFooter/CorporateFooter';
import FloatingContact from '../components/shared/FloatingContact';

export default function CorporateLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <CorporateNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CorporateFooter />
      <FloatingContact />
    </div>
  );
}
