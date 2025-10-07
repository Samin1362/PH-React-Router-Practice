import React from "react";

const Book = ({ book }) => {
  console.log(book);
  const { bookName, image, tags } = book;
  return (
    <div className="mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm p-[24px]">
        <figure className="bg-gray-200 rounded-lg p-2">
          <img className="h-[135px]" src={image} alt="Shoes" />
        </figure>
        <div className=" mt-4 flex gap-1.5 w-full">
          {tags.map((tag) => (
            <div
              className="text-[#23BE0A] bg-[#23BE0A]/5 rounded-lg"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
