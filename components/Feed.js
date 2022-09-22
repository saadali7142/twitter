import { SparklesIcon } from '@heroicons/react/24/outline';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Syed Saad',
      username: 'saad88',
      userImg: '/ic.jpg',
      img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      text: 'nice view',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'Syed Saadss',
      username: 'saad88',
      userImg: '/ic.jpg',
      img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      text: 'amazing',
      timestamp: '2 days ago',
    },
  ];
  return (
    <div className="xl:ml-[370px]  border-l border-r border-gray-400 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className=" hoverEffect flex items-center jusify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
