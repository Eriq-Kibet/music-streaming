import React from "react";

function MusicCard() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="" alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">Photo by</div>
          <ul>
            <li>
              <strong>Likes: </strong>
            </li>
            <li>
              <strong>Dislikes: </strong>
            </li>
            <li>
              <strong> Play </strong>
            </li>
          </ul>
        </div>
        {/* <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default MusicCard;
