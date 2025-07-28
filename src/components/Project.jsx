import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-10 space-y-4 sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Left section */}
        <div>
          <p className="text-xl sm:text-2xl font-semibold text-white">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        {/* Right section */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 text-sm sm:text-base text-white cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 sm:w-5" />
        </button>
      </div>

      {/* Divider line */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
