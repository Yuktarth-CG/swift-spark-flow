
import React, { useState } from 'react';
import { ArrowLeft, Search, Image, Video, Link, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState('');
  const [tags, setTags] = useState('');

  const popularTags = ['#Science', '#Quiz', '#Maths', '#Social'];

  const handleOpenSwiftStudio = () => {
    // Open Swift Studio in the same window (since we're already in a web app)
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <ArrowLeft 
            size={24} 
            className="text-gray-600 cursor-pointer" 
            onClick={() => navigate(-1)}
          />
          <h1 className="text-lg font-medium text-gray-900">New Post</h1>
        </div>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
          onClick={() => console.log('Post created')}
        >
          Post
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">DS</span>
          </div>
          <span className="font-medium text-gray-900">Devesh Sharma</span>
        </div>

        {/* Post Content */}
        <div className="bg-white rounded-lg p-4 border">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full h-32 border-none outline-none resize-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* AI Helper Button */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium mb-1">Need help creating content?</h3>
              <p className="text-sm opacity-90">Use AI to generate engaging posts, quizzes, and more!</p>
            </div>
            <Sparkles size={24} className="opacity-80" />
          </div>
          <Button 
            onClick={handleOpenSwiftStudio}
            className="w-full mt-3 bg-white text-purple-600 hover:bg-gray-50 font-medium"
          >
            <Sparkles size={16} className="mr-2" />
            Create with AI
          </Button>
        </div>

        {/* Add Tags */}
        <div className="space-y-3">
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-medium">Add Tags</span>
            <span className="text-red-500">*</span>
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Start typing your tags"
              className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500"
            />
            <Search size={20} className="absolute right-3 top-3 text-gray-400" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Popular:</span>
            <div className="flex gap-2 flex-wrap">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setTags(tags + (tags ? ' ' : '') + tag)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Options */}
        <div className="space-y-4">
          <div className="text-center text-gray-500 text-sm">
            Add photos, videos, or links
          </div>
          
          <div className="flex justify-center gap-8">
            <button className="flex flex-col items-center gap-2 p-4 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Image size={20} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Photo</span>
            </button>
            
            <button className="flex flex-col items-center gap-2 p-4 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Video size={20} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Video</span>
            </button>
            
            <button className="flex flex-col items-center gap-2 p-4 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Link size={20} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
