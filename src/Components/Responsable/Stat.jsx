function Grid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-blue-200 p-4 h-24 sm:h-auto">1</div>
      <div className="bg-green-200 p-4 h-24 sm:h-auto">2</div>
      <div className="bg-yellow-200 p-4 h-24 lg:col-span-2">3</div>
    </div>
  );
}

export default Grid;
