const MyGrid = () => {
  return (
    <>
      <div class="container-lg my-5">
        <h4>three equal-width columns across all devices</h4>
        <div class="row">
          <div class="col">
            <div class="p-5 bg-primary text-light">col 1</div>
          </div>
          <div class="col">
            <div class="p-5 bg-primary text-light">col 2</div>
          </div>
          <div class="col">
            <div class="p-5 bg-primary text-light">col 3</div>
          </div>
        </div>
      </div>

      <div class="container-lg my-5">
        <h4>1sr row 2 equal size col, 2nd row me 3 equal size col</h4>
        <div class="row">
          <div class="col">
            <div class="p-5 bg-primary text-light">col 1</div>
          </div>
          <div class="col">
            <div class="p-5 bg-primary text-light">col 2</div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col">
            <div class="p-5 bg-primary text-light">col 1</div>
          </div>
          <div class="col">
            <div class="p-5 bg-primary text-light">col 2</div>
          </div>
          <div class="col">
            <div class="p-5 bg-primary text-light">col 3</div>
          </div>
        </div>

        <div class="container-fluid my-5">
          <h4>
            default 2 equal witdh col, sm hit 1st col take 8 col and 2nd col
            take 4 col
          </h4>
          <div class="row">
            <div class="col col-sm-8">
              <div class="p-5 bg-primary text-light">col 1</div>
            </div>
            <div class="col col-sm-4">
              <div class="p-5 bg-dark text-light">col 2</div>
            </div>
          </div>
        </div>

        <div class="container-fluid my-5">
          <h4>row ek hi he each col aligning horizontally in below examples</h4>
          <div class="row justify-content-end">
            <div class="col-4 ">
              <div class="p-5 bg-primary text-light">col 1</div>
            </div>
            <div class="col-4 ">
              <div class="p-5 bg-dark text-light">col 2</div>
            </div>
          </div>
        </div>

        <div class=" container-fluid  bg-primary " style={{ height: "100px" }}>
          <div class=" row align-items-center h-100">
            <div class="col-4 ">
              <div class=" bg-dark text-light ">col 1</div>
            </div>
            <div class="col-4 ">
              <div class=" bg-dark text-light">col 2</div>
            </div>
          </div>
        </div>
        <div
          class=" container-fluid  bg-primary "
          style={{ height: "100px", marginTop: "10px" }}
        >
          <div class=" row align-items-center h-100">
            <div class="col-4 ">
              <div class=" bg-dark text-light ">col 1</div>
            </div>
            <div class="col-4 offset-2 ">
              <div class=" bg-dark text-light">col 2</div>
            </div>
          </div>
        </div>

        <div class="container bg-primary m-5 overflow-hidden">
          <div class="row gy-4">
            <div class="col-6 bg-dark text-light">Custom column padding</div>
            <div class="col-6 bg-dark text-light">Custom column padding</div>
            <div class="col-6 bg-dark text-light">Custom column padding</div>
            <div class="col-6 bg-dark text-light">Custom column padding</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyGrid;
