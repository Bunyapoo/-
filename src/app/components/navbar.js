export default function navbar() {
    return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src="image/logo_197x49.png" class="img-fluid" alt="..."></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">หน้าแรก</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">เกี่ยวกับเรา</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ปริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">ติดต่อเรา</a>
        </li>
      </ul>
      <button type="button" class="btn btn-outline-success">Sing in</button>&nbsp;
      <button type="button" class="btn btn-outline-success">Sing Up</button>
    </div>
  </div>
</nav>


    )
}
     