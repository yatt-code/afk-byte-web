import { BlogCard } from '@/components/blog/blog-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function BlogGrid() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </section>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    slug: "future-web-development-trends-2025",
    excerpt: "Explore the emerging technologies and methodologies that will shape web development in the coming year, from WebAssembly to new CSS capabilities.",
    date: "June 15, 2025",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    category: "Web Development",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Demystifying Cloud Migration: A Step-by-Step Guide",
    slug: "demystifying-cloud-migration-guide",
    excerpt: "Learn the essential steps, best practices, and common pitfalls to avoid when migrating your infrastructure to the cloud.",
    date: "June 8, 2025",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    category: "Cloud Services",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Building Secure Applications: Cybersecurity Best Practices",
    slug: "building-secure-applications-cybersecurity",
    excerpt: "Discover essential strategies to protect your applications from common security threats and vulnerabilities in today's digital landscape.",
    date: "May 30, 2025",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    category: "Cybersecurity",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "The Rise of Progressive Web Apps: Benefits and Implementation",
    slug: "rise-progressive-web-apps",
    excerpt: "Explore how PWAs are changing the web landscape and how your business can benefit from this powerful technology.",
    date: "May 22, 2025",
    author: {
      name: "Emily Wong",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    category: "Web Development",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "AI in Business: Practical Applications for SMEs",
    slug: "ai-business-practical-applications-smes",
    excerpt: "Discover how small and medium enterprises can leverage artificial intelligence to improve operations and drive growth.",
    date: "May 15, 2025",
    author: {
      name: "David Smith",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    category: "AI & Data",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "The Importance of User Experience in Digital Products",
    slug: "importance-user-experience-digital-products",
    excerpt: "Learn why UX is crucial for the success of digital products and how to implement user-centered design principles in your projects.",
    date: "May 8, 2025",
    author: {
      name: "Olivia Martinez",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];