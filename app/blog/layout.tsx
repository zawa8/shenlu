import { Metadata } from 'next';
import { ReactNode } from 'react';
export const metadata: Metadata = { title: 'news AazTk', description: 'souTh Asia newspAper' }
export default async function BlogLayout({ children }: { children: ReactNode }) { return <>{children}</> }
