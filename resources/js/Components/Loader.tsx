

function Loader({show = false}) {
  return show ? <div className="bgLoader"><div className="loader"></div></div> : <></>
}

export default Loader