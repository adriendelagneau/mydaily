<ul className='w-full h-full py-3'>
{categoryData?.map((category) => (
  <li key={category.id} className="relative">
    <Link
      href={category.url}
      className="relative flex items-center justify-between hover:bg-blue-100 hover:cursor-pointer"
      onMouseEnter={() => handleMouseEnter(category.id)}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        closeMenu();
        setCurrentCategory(null);
      }}
    >
      <div className='p-3 capitalize'>{category.name}</div>
      {category.subcategory.length > 0 && (
        <span className="text-gray-500">
          {/* Your SVG code */}
        </span>
      )}
    </Link>

    {currentCategory === category.id && (
      <div className='absolute right-0 top-[50%] transform translate-x-[100%] translate-y-[-50%] flex flex-col capitalize'>
        <ul className='pl-4 bg-white custom-clip-path min-w-[130px]'>
          {category.subcategory.map((subcategory, subIndex) => (
            <li key={subIndex} className="flex bg-white">
              <Link
                href={subcategory.url}
                onClick={() => {
                  closeMenu();
                  setCurrentCategory(null);
                }}
                className="w-full px-4 py-2 hover:bg-blue-100 hover:cursor-pointer"
              >
                {subcategory.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
))}
</ul>





















return (
  <>
    {/* Overlay to capture clicks and close the sidebar */}
    <div className={`w-full h-[calc(100vh-65px)] opacity-30 fixed top-[65px] left-500 text-lg font-medium capitalize ${isOpen ? 'z-20 bg-gray-900' : '-z-10'}`} onClick={closeMenu}></div>
    {/* Sidebar container */}
    <div className={`w-[220px] h-[calc(100vh-65px)] z-30 bg-white fixed top-[65px] transition-all duration-300 ease-in-out border-r ${isOpen ? 'left-0' : '-left-[250px]'}`}>
      <div className='w-full mt-8 mb-5 text-center'>
        <Link href="/subscribe" className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500" onClick={closeMenu}>Subscribe</Link>
      </div>
      {/* Navigation list */}
      <ul className='w-full h-full py-3'>
        {categoryData?.map((link, i) => (
          <li key={i} className="relative">
            {/* Main category link */}
            <Link
              href={link.url}
              className="relative flex items-center justify-between hover:bg-blue-100 hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter(link._id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                closeMenu()
                setCurrentCategory(null)
              }}
            >
              {/* Main category name */}
              <div className='p-3 capitalize'>{link.name}</div>
              {/* Show the '>' svg, if the category has subcategories */}
              {subcategoryData?.some(subcategory => subcategory.category._id === link._id) && (
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              )}
            </Link>

            {/* Show subcategory list if the category is currently hovered */}
            {currentCategory === link._id && (
              <div className='absolute right-0 top-[50%] transform translate-x-[100%] translate-y-[-50%] flex flex-col capitalize'
                onMouseEnter={() => handleMouseEnter(link._id)}
                onMouseLeave={handleMouseLeave}
              >
                <ul className='pl-4 bg-white custom-clip-path min-w-[130px]'>
                  {subcategoryData
                    ?.filter(subcategory => subcategory.category._id === link._id)
                    .map((subcategory, subIndex) => (
                      <li key={subIndex} className="flex bg-white">
                        <Link
                          href={subcategory.url}
                          onClick={() => {
                            closeMenu()
                            setCurrentCategory(null)
                          }}
                          className="w-full px-4 py-2 hover:bg-blue-100 hover:cursor-pointer"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </>
);
}