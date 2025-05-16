import { BlogGrid } from '@/components/blog/blog-grid';
import { PageHeader } from '@/components/layout/page-header';

export const metadata = {
  title: 'Blog | AFK Byte',
  description: 'Latest news, insights, and articles from AFK Byte',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Our Blog" 
        description="Stay up to date with the latest trends, insights, and news in technology and IT consultancy."
      />
      <BlogGrid />
    </>
  );
}