const MyContainer = () => {
  return (
    <>
      <div class="container p-5 my-5 bg-dark text-white">
        Container with auto change on all breakpoints , when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It
      </div>
      <div class="container-lg p-5 my-5 bg-dark text-white">
        Container with remain 100% till not hit -lg , when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It
      </div>
      <div class="container-lg p-5 my-5 bg-dark text-white">
        width always 100% , when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It
      </div>
    </>
  );
};
export default MyContainer;
