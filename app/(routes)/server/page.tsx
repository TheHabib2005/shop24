// pages/index.jsx
// import MyComponent from '@/components/MyComponent.server';
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('@/components/MyComponent.server'), { ssr: true });

export default function Home() {
    return (
        <div className='text-white'>
            <h1>Welcome to Next.js 14</h1>
            <MyComponent />
        </div>
    );
}
