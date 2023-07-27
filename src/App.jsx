import { useState } from 'react';
import './App.css';
import { portfolioItems } from './utils/data';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  console.log(portfolioItems); 
  const [selectedItem, setSelectedItem] = useState(portfolioItems[4]);
  return <div className="App">
    {selectedItem ? (
      <PortfolioItemPage item={selectedItem} />
    ) : (
        <PortfolioPage />
    )}
  </div>;
};