import { useState } from 'react';
import ButtonLinks from './ButtonLinks';
import { dataCard } from '../data/dataCard';
import { dataBtnList } from '../data/dataBtnList';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from './Pagination';

const Main = () => {
  const [showdata, setShowdata] = useState(dataCard);
  const [currentActive, setCurrentActive] = useState('all');
  const [page, setPage] = useState(1);
  const limit = 4;

  const start = (page - 1) * limit;
  const end = start + limit;
  const currentData = showdata.slice(start, end);

  const handleOnclick = (pathLink) => {
    setCurrentActive(pathLink);
    const newArr = dataCard.filter((item) =>
      item.category.find((myItem) => myItem === pathLink)
    );
    setShowdata(newArr);
  };

  return (
    <>
      <main
        className="flex flex-col items-center gap-12 sm:items-start sm:gap-5 md:flex-row"
        id="Projects"
      >
        <section className="flex flex-row flex-wrap justify-center gap-3 md:flex-col md:justify-normal lg:ps-5">
          {dataBtnList.map((item) => (
            <ButtonLinks
              key={item.pathLink}
              currentActive={currentActive}
              handleOnclick={handleOnclick}
              btncategory={item.pathLink}
            >
              {item.name}
            </ButtonLinks>
          ))}
        </section>
        <section className="flex grow flex-wrap justify-center gap-5">
          <AnimatePresence>
            {currentData.map((item) => {
              return (
                <motion.article
                  key={item.projectTitle}
                  className="card-style "
                  layout
                  initial={{ transform: 'scale(0.4)' }}
                  animate={{ transform: 'scale(1)' }}
                  transition={{ type: 'spring', damping: 7, stiffness: 40 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1.1,
                    transition: { type: 'spring', stiffness: 100, damping: 8 },
                  }}
                >
                  <img
                    src={item.imgPath}
                    alt="img-pro"
                    className="h-44 w-full"
                  />

                  <div className="box px-2 py-4">
                    <h2 className="title font-bold capitalize text-title-light dark:text-title-dark">
                      {item.projectTitle}
                    </h2>
                    <p className="sub-title mb-3 mt-2 text-sm text-subtitle-light dark:text-subtitle-dark">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-base text-subtitle-light dark:text-subtitle-dark">
                      <div className="flex gap-5">
                        <a
                          href={item.LinkProject}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-link icon-style"></span>
                        </a>
                        <a
                          href={item.LinkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-github icon-style"></span>
                        </a>
                      </div>

                      <a
                        className="link flex items-center gap-1 text-bluu-light dark:text-bluu-dark"
                        href={item.LinkProject}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        more
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
      <Pagination itemsPerPage={limit} setPage={setPage} data={showdata} />
    </>
  );
};
export default Main;
