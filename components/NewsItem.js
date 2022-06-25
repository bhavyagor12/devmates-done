import React from "react";
import Link from "next/link";
function NewsItem({ data }) {
  const MAX_LENGTH = 50;
  return (
    <div>
      <Link href={data.link}>
        <div className="m-10 flex p-10">
          <div class="w-200 max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="px-6 py-4">
              <div className="flex flex-col items-center justify-center">
                <div className="text-blue mb-2 text-xl text-black">
                  {data.title}
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img src={data.image_url} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p class="text-base text-black">Source : {data.source_id}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p class="text-base text-black">Published : {data.pubDate}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsItem;
