const NewsCard = ({ icon, title, bgColor = "bg-gray-100" }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition-shadow">
      <div className={`w-full h-16 ${bgColor} rounded mb-2 flex items-center justify-center`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-xs text-gray-600 leading-tight">{title}</p>
    </div>
  )
}

export default NewsCard