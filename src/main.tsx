import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './ui/App';
import './styles/main.scss';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
);
