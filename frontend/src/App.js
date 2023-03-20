import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './components/Home'
import Prefetch from './features/auth/Prefetch'
import ReadMenus from './features/menu/ReadMenus'
import CreateMenu from './features/menu/CreateMenu'
import UpdateMenu from './features/menu/UpdateMenu'
import SalesPage from "./features/salespage/SalesPage";
import ReadCart from "./features/cart/ReadCart";
import ReadOrder from "./features/order/ReadOrder";
import FinishAndPay from "./features/order/FinishAndPay";
import FinalCart from './features/cart/FinalCart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route element={<Prefetch />}>
            <Route path="readmenus" element={<ReadMenus />} />
            <Route path="createmenu" element={<CreateMenu />} />
            <Route path=":id" element={<UpdateMenu />} />
            <Route path="readcarts" element={<ReadCart />} />
            <Route path="readorders" element={<ReadOrder />} />
            <Route path="finishandpay" element={<FinishAndPay />} />
            <Route path="finalcart" element={<FinalCart />} />

            </Route> 

            <Route path="salespage" element={<SalesPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
