const BookTable = ({ onTableSelect }) => {
  const tables = [
    "/assets/table/table_1.png",
    "/assets/table/table_1.png",
    "/assets/table/table_2.png",
    "/assets/table/table_1.png",
    "/assets/table/table_3.png",
    "/assets/table/table_1.png",
    "/assets/table/table_1.png",
    "/assets/table/table_2.png",
    "/assets/table/table_1.png",
    "/assets/table/table_3.png",
    "/assets/table/table_1.png",
    "/assets/table/table_1.png",
    "/assets/table/table_2.png",
    "/assets/table/table_1.png",
    "/assets/table/table_3.png",
  ];

  return (
    <div className="m-auto grid w-[80vw] grid-cols-5 grid-rows-3 gap-4 pt-16 pb-32">
      {tables.map((table, index) => (
        <div
          key={index}
          className="relative cursor-pointer transition-transform hover:scale-110 duration-300"
          onClick={() => onTableSelect(index + 1)}
        >
          <img src={table} alt={`table ${index + 1}`} />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-white">
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BookTable;
