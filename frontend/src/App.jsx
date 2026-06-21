import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { antdTheme } from './styles/theme.js';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/SidebarComponent';
import HomePage from './pages/home/HomePage';
import BooksPage from './pages/books/BooksPage';
import ReadersPage from './pages/readers/ReadersPage';
import BorrowsPage from './pages/borrows/BorrowsPage';
import { Toaster } from 'sonner';

const { Content } = Layout;

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleMenuClick = (e) => {
    if (e.key === 'go-home') {
      navigate('/');
    } else {
      navigate(`/${e.key}`);
    }
  };

  return (
    <ConfigProvider theme={antdTheme}>
      
      <Toaster position="top-right" />

      <Layout style={{ height: '100vh' }}>
        
        <HeaderComponent 
          isAdminMode={!isHome} 
          onDropdownClick={(e) => navigate(`/${e.key}`)} 
        />

        <Layout style={{ height: '90vh' }}>
          {isHome ? (
            <Content style={{ padding: '24px', overflowY: 'auto' }}>
              <HomePage />
            </Content>
          ) : (
            <>
              <SidebarComponent 
                currentTab={location.pathname.substring(1)} 
                onMenuClick={handleMenuClick} 
              />
              <Content style={{ overflowY: 'auto' }}>
                <Routes>
                  <Route path="/books" element={<BooksPage />} />
                  <Route path="/readers" element={<ReadersPage />} />
                  <Route path="/borrows" element={<BorrowsPage />} />
                </Routes>
              </Content>
            </>
          )}
        </Layout>

      </Layout>
    </ConfigProvider>
  );
}

export default App;