//리액트에서 컴포넌트를 만들려면 React.Component 클래스를 상속하고, 데이터는 꼭 this.state에 담아 두고, render() 함수에 HTML과 같은 JSX 문법을 이용해서 데이터를 어떻게 UI로 표기 할건지 정의를 해놓도록 만들기

데이터(State)가 변경이 되면 → 리액트가 render() 함수를 호출해서 UI가 업데이트 된다

PureComponent는 현재 컴포넌트가 가지고 있는 상태와 (this.state), 업데이트 해야 하는 새로운 상태 (setState 함수의 인자로 전달된 새로운 오브젝트)의 레퍼런스를 비교해서 업데이트가 필요한 경우 해당 컴포넌트의 render 함수를 호출
