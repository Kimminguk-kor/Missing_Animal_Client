import React from "react";
import "../styles/Main_Menu.css";
import { Link, withRouter } from "react-router-dom";

import Signin from "./Signin";

class Main_Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="Main_Menu">
        <div>
          <h1>Finders</h1>
        </div>
        <div>
          <span className="Btn">
            <Link to="/mypage">
              <div className="mypageBtn">마이페이지</div>
            </Link>
          </span>
          <span className="Btn signin">
            <div onClick={this.openModal} className="signinBtn">
              로그인
            </div>
            <Signin isOpen={this.state.isModalOpen} close={this.closeModal} />
            {/* <button className="signinBtn">로그인</button> */}
          </span>
        </div>
        {/* <div className="map">
          <Link to="/map">
            <button className="mapBtn">지도보기</button>
          </Link>
        </div>
        <div className="board">
          <Link to="/board">
            <button className="boardBtn">게시판</button>
          </Link>
        </div>
        <div className="petRegister">
          <Link to="/petregister">
            <button className="petRegisterBtn">펫 등록하기</button>
          </Link>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Main_Menu);
