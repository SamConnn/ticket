const SearchBar = () => {
  return (
    <div className=" flex justify-center items-center w-full">
      <div className="rounded-lg w-full pb-28">
        <form>
          <div className="sm:flex items-center rounded-lg overflow-hidden px-2 py-1 justify-between bg-slate-200 shadow-lg">
            <input
              className="text-base text-black flex-grow outline-none px-2 bg-slate-200 py-4"
              type="text"
              placeholder="Search your favorite"
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
              <select
                id="Com"
                className="text-base outline-none border-2 py-2 rounded-lg bg-slate-200"
              >
                <option value="com" defaultValue="com">
                  More Filter
                </option>
                <option value="net">net</option>
                <option value="org">org</option>
                <option value="io">io</option>
              </select>
              <button className="bg-slate-200 text-black font-bold rounded-lg px-4 py-2 border-2">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
