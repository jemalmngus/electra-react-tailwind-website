import React from 'react';
import { FiUser, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
}

const BlogCard: React.FC<{ post: BlogCardProps }> = ({ post }) => {
  const { id, title, author, date, content, imageUrl } = post;

  // Truncate the content to a specific number of characters
  const truncatedContent = content.substr(0, 150) + '...';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <FiUser className="mr-2" />
        <span>{author}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FiCalendar className="mr-2" />
        <span>{date}</span>
      </div>
      <p className="text-gray-700 mb-4">{truncatedContent}</p>
      <Link to={`/blog/${id}`} className="text-blue-500 font-medium">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
