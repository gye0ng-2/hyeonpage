import {useState} from 'react' 
import './App.css' // css 가져오기

function App() {   // 컴포넌트

  // 처음에는 HOME이 선택된 상태로 시작
  const [menu, setMenu] = useState('HOME')
  //카테고리 목록
  const menus =['HOME', 'ABOUT ME', 'PROJECT', 'GALLERY','CONTACT']

  return (
    <div>
        {/*오른쪽 위 지구 */}
        <div className='earth'></div>
        {/* 메뉴 부분 */}
        <nav className="navbar">
          {menus.map((item)=>(
            <button
              key={item} /* 버튼 구별을 위해 붙이는 고유 식별값 */
              onClick={()=>setMenu(item)}
              className={menu === item ? 'active' : ''}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className='content-box'>
          {menu === 'HOME' && (
            <div>
              <div className="squirrel">
                <img src="/daram1.png" alt="다람쥐" />
                <img src="/daram2.png" alt="" className="eyes-closed" />
              </div>
              <p>홈페이지 입니다..</p>
            </div>
          )}
          {menu === 'ABOUT ME' && <p>나는.. 이런사람입니다..</p>}
          {menu === 'PROJECT' && <p>제가 한 프로젝트..입니다..</p>}
          {menu === 'GALLERY' && <p>제가 그린 기린 그림 입니다..</p>}
          {menu === 'CONTACT' && <p>제..연락처..입니다..</p>}
        </div>
    </div>
  )
}

export default App // App이라는 함수를 다른 파일에서도 사용할 수 있도록 내보내는 코드