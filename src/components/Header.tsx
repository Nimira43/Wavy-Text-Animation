import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<{ username: string } | null>({
    username: 'Test User',
  })

  const handleLogout = () => {
    navigate('/')
    setUser(null)
  }

  return (
    <div>
      
    </div>
  )
}

export default Header

