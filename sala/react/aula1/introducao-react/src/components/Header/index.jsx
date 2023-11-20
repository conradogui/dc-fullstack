import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div className="flex justify-between px-10 items-center bg-gradient-to-r from-gray-100 to-gray-200 py-4">
        <div>
            <img className="w-5/12" src={logo} alt="" />
        </div>
        <div className="flex gap-3 items-center">
            <box-icon type='solid' name='user-circle'></box-icon>
            <span>Olá, Guilherme!</span>
        </div>
    </div>
  )
}

export default Header