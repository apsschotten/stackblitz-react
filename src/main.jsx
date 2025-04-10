import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Home from './Home.jsx';
import AuthMiddleware from './middleware.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<AuthMiddleware />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		<BrowserRouter>
	</StrictMode>
);
