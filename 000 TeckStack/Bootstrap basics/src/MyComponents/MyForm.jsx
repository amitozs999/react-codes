const MyForm = () => {
  return (
    <>
      <form class="m-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            checked
          />
          <label class="form-check-label" for="exampleCheck1">
            Always sign in on this device
          </label>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-subtle me-2">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <form class="m-3">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="gridRadios1">
                First radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label class="form-check-label" for="gridRadios2">
                Second radio
              </label>
            </div>
            <div class="form-check disabled">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
                disabled
              />
              <label class="form-check-label" for="gridRadios3">
                Third disabled radio
              </label>
            </div>
          </div>
        </fieldset>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
};
export default MyForm;
