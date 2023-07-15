import React from 'react';
import { useParams } from 'react-router-dom';
import { FiUser, FiCalendar, FiClock } from 'react-icons/fi';
import { formatDate } from '../utils/dateUtils';
import Page from '../components/Page';

interface BlogDetailParams {
  id: string;
  [key: string]: string | undefined;
}

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<BlogDetailParams>();

  // Fetch blog post details based on the ID

  // Example blog post details
  const blogPost = {
    id: id,
    title: 'The Benefits of Renewable Energy',
    author: 'John Doe',
    date: 'July 15, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    content: `
      Renewable energy sources, such as solar and wind power, are becoming increasingly popular due to their numerous benefits. In this blog post, we will explore the advantages of renewable energy and its impact on the environment and society.

      <h3><FiClock /> Sustainable and Clean</h3>
      <p>One of the key benefits of renewable energy is its sustainability and cleanliness. Unlike fossil fuels, which produce harmful emissions when burned, renewable energy sources generate electricity without releasing greenhouse gases or contributing to air pollution. This helps to mitigate climate change and improve air quality.</p>

      <h3><FiUser /> Job Creation</h3>
      <p>The renewable energy sector also offers significant job opportunities. As the demand for renewable energy grows, new jobs are being created in the installation, manufacturing, and maintenance of renewable energy systems. This not only boosts the economy but also provides employment opportunities in local communities.</p>

      <h3><FiCalendar /> Energy Independence</h3>
      <p>Relying on renewable energy sources reduces dependence on fossil fuels, which are often imported from other countries. By diversifying the energy mix and promoting renewable energy, countries can achieve greater energy independence and reduce their vulnerability to fluctuations in fossil fuel prices and supply.</p>

      <h3><FiClock /> Long-Term Cost Savings</h3>
      <p>While the initial investment in renewable energy systems may be higher, they offer long-term cost savings. Renewable energy sources, such as solar panels and wind turbines, have lower operating costs compared to traditional energy sources. Over time, this can result in significant savings on energy bills.</p>

      <h3><FiUser /> Community Empowerment</h3>
      <p>Renewable energy projects can empower local communities by providing them with access to clean and affordable energy. In remote areas or developing countries, where grid infrastructure may be limited, renewable energy systems can serve as a reliable source of electricity and improve the quality of life for residents.</p>

      <p>Overall, the benefits of renewable energy are vast and have far-reaching implications. By transitioning to a more sustainable energy future, we can mitigate climate change, create jobs, promote energy independence, and improve the well-being of communities around the world.</p>
    `,
  };

  const formattedDate = formatDate(blogPost.date);
  return (
    <Page title={blogPost.title} description="Read more about the benefits of renewable energy">
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{blogPost.title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <FiUser className="mr-2" />
          <span>{blogPost.author}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FiCalendar className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        <img src={blogPost.imageUrl} alt={blogPost.title} className="w-full h-auto mb-4" />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        ></div>
      </div>
    </div>
  </Page>

  );
};

export default BlogDetailPage;
