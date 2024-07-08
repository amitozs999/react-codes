const MyCollapse = () => {
  return (
    <>
      <div className="m-3">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
        >
          Button
        </button>

        <div class="collapse mt-3" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component
          </div>
        </div>
      </div>

      <div className="n-3">
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
          >
            Toggle first element
          </a>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
          >
            Toggle second element
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
          >
            Toggle both elements
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                Some placeholder content for the second collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCollapse;
