/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProcessDashboard from './components/ProcessDashboard';
import CancellationGuide from './components/CancellationGuide';
import PlanChangeGuide from './components/PlanChangeGuide';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProcessDashboard />} />
        <Route path="/cancelamento" element={<CancellationGuide />} />
        <Route path="/alteracao-plano" element={<PlanChangeGuide />} />
      </Routes>
    </BrowserRouter>
  );
}
