import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-3 sm:px-6 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-xl sm:max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 sm:top-5 sm:right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Project Image */}
        <img
          src={image}
          alt={title}
          className="w-full max-h-[200px] sm:max-h-[300px] object-cover object-top rounded-t-2xl"
        />

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white">
            {title}
          </h5>
          <p className="mb-3 text-sm sm:text-base font-normal text-neutral-400">
            {description}
          </p>

          {/* SubDescription (Compact Bulleted) */}
          <ul className="mb-4 space-y-1 list-disc list-inside text-sm sm:text-base text-neutral-400">
            {subDescription.map((subDesc, index) => (
              <li key={index}>{subDesc}</li>
            ))}
          </ul>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-9 h-9 sm:size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm sm:text-base font-medium text-white hover-animation"
            >
              View Project
              <img src="assets/arrow-up.svg" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
