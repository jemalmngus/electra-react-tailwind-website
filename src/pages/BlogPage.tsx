import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Page from '../components/Page';

const BlogPage = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring Renewable Energy Sources for a Sustainable Future',
      date: 'August 10, 2023',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/800/400?random=1',
      content:
        'Renewable energy plays a crucial role in our transition to a sustainable future. In this blog post, we delve into various renewable energy sources and their benefits.',
    },
    {
      id: 2,
      title: 'Revolutionizing the Electric Vehicle Industry: Key Innovations and Trends',
      date: 'July 25, 2023',
      author: 'Jane Smith',
      imageUrl: 'https://picsum.photos/800/400?random=2',
      content:
        'The electric vehicle industry is undergoing rapid advancements. Discover the latest innovations and trends that are shaping the future of transportation.',
    },
    {
      id: 3,
      title: 'Maximizing Energy Efficiency in Buildings: Strategies and Best Practices',
      date: 'July 12, 2023',
      author: 'Michael Johnson',
      imageUrl: 'https://picsum.photos/800/400?random=3',
      content:
        'Energy efficiency in buildings is a crucial aspect of sustainable development. Learn about effective strategies and best practices for optimizing energy usage in structures.',
    },
  ];

  return (
    <Page title="Blog - Electricl Expo" description="Explore our blog for the latest news and insights on renewable energy, electric vehicles, and energy efficiency.">
      <div className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default BlogPage;
