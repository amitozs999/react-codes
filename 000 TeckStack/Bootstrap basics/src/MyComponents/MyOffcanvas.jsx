const MyOffcanvas = () => {
  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Static offcanvas
      </button>
      <div
        class="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h4 class="offcanvas-title" id="staticBackdropLabel">
            Offcanvas
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>I will not close if you click outside of me.</div>
        </div>
      </div>
    </>
  );
};

export default MyOffcanvas;
